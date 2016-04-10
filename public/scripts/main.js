var tile = {
  border: '1px solid gray',
  width: '300px',
  margin: '5px',
  display: 'inline-block'
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
          <h3 className="projectTitle">
            {this.props.title}
          </h3>
          <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
      </div>
    );
  }
});

var ProjectBox = React.createClass({
  loadProjectsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleProjectSubmit: function(project) {
    var projects = this.state.data;
    // Optimistically set an id on the new comment. It will be replaced by an
    // id generated by the server. In a production application you would likely
    // not use Date.now() for this and would have a more robust system in place.
    project.id = Date.now();
    var newProjects = projects.concat([project]);
    this.setState({data: newProjects});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: project,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: projects});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadProjectsFromServer();
    setInterval(this.loadProjectsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="projectBox">
        <ProjectList data={this.state.data} />
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
  <ProjectBox url="/api/projects" pollInterval={2000} />,
  document.getElementById('content')
);