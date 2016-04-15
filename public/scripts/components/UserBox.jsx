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

var UserBox = React.createClass({
    contextTypes: {
        'router': React.PropTypes.func
    },
    render () {
        const router = this.context.router;
        const id = router.getCurrentParams().id;
        return (
            <div className="userBox" >
                  <UserPicture />
                  <UserTitle />
                  <UserDetail />
                {/*<UserTitle></UserTitle>
                <UserDescription></UserDescription>
                <UserDetail></UserDetail>*/}
            </div>
        );
    }
});

var UserPicture = React.createClass({
    render () {
        return (
            <div className="userPicture" style={ tile } >
                <div style={ tileheader } ></div>
            </div>
        );
    }
});

var UserTitle = React.createClass({
    render () {
        return (
            <span className="userTitle">
                <h1>User</h1>
                <h1>Positions</h1>
                <button type="button">Prev</button>
                <button type="button">Next</button>
                <hr></hr>
            </span>
        );
    }
});

var UserDetail = React.createClass({
    render () {
        return (
            <div className="userDetail">
                <p>Description</p>
                <UserDetailForm />
            </div>
        )
    }
});

var UserDetailForm = React.createClass({
    render () {
        return (
            <form className="userDetailForm">
              <input type="text" placeholder="handphone" /><br/>
              <input type="text" placeholder="email" /> <br/>
            </form>
        );
    }
});



var ProjectForm = React.createClass({
  getInitialState: function() {
      return { title: '',description: '', projectManager: '', deadline: '' };
  },
  handleTitleChange: function(e) {
      this.setState({ title: e.target.value });
  },
  handleDescriptionChange: function(e) {
      this.setState({ description: e.target.value });
  },
  handleProjectManagerChange: function(e) {
      this.setState({ projectManager: e.target.value });
  },
  handleDeadlineChange: function(e) {
      this.setState({ deadline: e.target.value });
  },
  handleSubmit: function(e) {
      e.preventDefault();

      var title = this.state.title.trim();
      var description = this.state.description.trim();
      var projectManager = this.state.projectManager.trim();
      var deadline = this.state.deadline.trim();

      if (!description || !title || !projectManager || !deadline) {
          return;
      }

      var project = { title: title, description: description, projectManager: projectManager, deadline: deadline };

      $.ajax({
          url: this.props.url,
          dataType: 'json',
          type: 'POST',
          data: project,
          success: function(data) {
              window.location.replace("/");
          }.bind(this),
          error: function(xhr, status, err) {
              alert("Failed to create new project");
              console.error(this.props.url, status, err.toString());
          }.bind(this)
      });
  },
  render: function() {
      return (
        <form className="projectForm" onSubmit= {this.handleSubmit }>
          <input
            type="text"
            placeholder="Title"
            value={ this.state.title }
            onChange={ this.handleTitleChange }
          /> <br />
          <input
            type="text"
            placeholder="Description"
            value={ this.state.description }
            onChange={ this.handleDescriptionChange }
          /> <br />
          <input
            type="text"
            placeholder="Project Manager"
            value={ this.state.projectManager }
            onChange={ this.handleProjectManagerChange }
          /> <br />
          <input
            type="text"
            placeholder="Deadline"
            value={ this.state.deadline }
            onChange={ this.handleDeadlineChange }
          /> <br />
          <input type="submit" value="Post" />
        </form>
      );
  }
});

ReactDOM.render(
  <ProjectForm url="/api/projects" />,
  document.getElementById('content')
);



var ProjectTile = React.createClass({
  rawMarkup: function() {
      var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
      return { __html: rawMarkup };
  },
  render: function() {
      return (
        <div className="project" style={tile}>
          <div style={tileheader}></div>
        </div>
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

// ReactDOM.render(
//   <ProjectBox url="/api/projects" pollInterval={10000} />,
//   document.getElementById('content')
// );

ReactDOM.render(
    <UserBox source="api/users"/>,
    document.getElementById('content')
);