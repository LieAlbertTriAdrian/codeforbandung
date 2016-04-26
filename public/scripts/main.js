var tile = {
  border: '1px solid gray',
  width: '300px',
  margin: '5px',
  display: 'inline-block',
  cursor: 'pointer'
};
var tileheader = {
  background: '#999999',
  width: '100%',
  height: '150px'
};
var tilebody = {
  padding: '0px 10px',
};

var ProjectTile = React.createClass({
  rawMarkup: function() {
      var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
      return { __html: rawMarkup };
  },
  render: function() {
      return (
        <div className="project" style={tile}>
          <div style={tileheader}>
          </div>
          <div style={tilebody}>
            <h3 className="projectTitle" style={{'margin-top': '15px'}}>
              {this.props.title}
            </h3>
            <span dangerouslySetInnerHTML={this.rawMarkup()} />
          </div>
        </div>
      );
  }
});

var CategoryForm = React.createClass({
  getInitialState: function() {
      return { category: '' };
  },
  handleCategoryChange: function(e) {
      this.setState({ category: e.target.value });
      console.log("asdf " + e.target.value);
      $.ajax({
        url: '/api/projects/cat/' + e.target.value,
        dataType: 'json',
        success: function (response) {
            ProjectList.setState({ data: response.data });
        }.bind(this),
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
  },
  render: function() {
      return (
        <form className="categoryForm" style={{'text-align': 'center'}}>
          <select value={ this.state.category } onChange={ this.handleCategoryChange }>
            <option value="opendata">Open data</option>
            <option value="civictech">Civic tech</option>
          </select><br /><br />
        </form>
      );
  }
});

var ProjectBox = React.createClass({
    loadProjectsFromServer: function() {
        console.log("loadProjectsFromServer");
        $.ajax({
          url: this.props.url,
          dataType: 'json',
          success: function (response) {
              this.setState({ data: response.data });
          }.bind(this),
          error: function (xhr, status, err) {
              console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
    },
    getInitialState: function() {
        return { data: [] };
    },
    componentDidMount: function() {
        this.loadProjectsFromServer();
        setInterval(this.loadProjectsFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
          <div className="projectBox">
              <CategoryForm />
              <ProjectList data={ this.state.data } />
          </div>
        );
    }
});

var ProjectList = React.createClass({
  render: function() {
      var projectNodes = this.props.data.map(function(project) {
        return (
          <ProjectTile title={project.title} key={project.id}>
              {project.description}
          </ProjectTile>
        );
      });
      return (
        <div className="projectList">
            {projectNodes}
        </div>
      );
  }
});

ReactDOM.render(
  <ProjectBox url="/api/projects" pollInterval={10000} />,
  document.getElementById('content')
);