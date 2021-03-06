var userId = location.search.split('id=')[1];

var pictureStyle = {
  border: '1px solid gray',
  background: '#999999',
  width: '15%',
  'minWidth': '150px',
  margin: '15px 5px',
  'verticalAlign': 'top',
  height: '200px',
  display: 'inline-block',
};

var userStyle = {
  width: '80%',
  display: 'inline-block',
  'verticalAlign': 'top',
  padding: '20px'
};

var alignRight = {
  width: '85%',
  display: 'inline-block',
  'textAlign': 'right'
};

var borderedForm = {
  border: '1px solid grey',
  'borderRadius': '10px',
  padding: '5px 10px'
};

var UserBox = React.createClass({
    getInitialState () {
        return { user: '' };
    },
    getUserData (id) {
      var url = '/api/users/' + id;
      console.log(url);
      $.ajax({
        url: url,
        dataType: 'json',
        success: function (response) {
            console.log("response : ", response);
            this.setState({ user: response.data[0] });
        }.bind(this),
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    componentDidMount () {
        console.log(userId);
        this.getUserData(userId); 
    },
    render () {
        console.log("User Id : ", userId);
        console.log("Hello");
        console.log("Props : ", this.props);
        console.log("States : ", this.state);
        /*const router = this.context.router;
        const id = router.getCurrentParams().id;*/
        return (
            <div className="userBox" >
                  <UserPicture data= { this.state.user } />
                  <div style={userStyle}>
                    <UserTitle data = { this.state.user } />
                    <UserDetail data = { this.state.user } />
                  </div>
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
            <div className="userPicture picture" style={ pictureStyle } >
            </div>
        );
    }
});

var UserTitle = React.createClass({
    render () {
        console.log("User Title : ", this.props);
        return (
            <span className="userTitle">
                <h2>{ this.props.data.name }</h2>
                <h3 style={{display: 'inlineBlock'}}>{ this.props.data.position }</h3>
                <div style={alignRight}>
                  <button type="button" className="btn" style={{'marginLeft': '5px'}}>Prev</button> 
                  <button type="button" className="btn" style={{'marginLeft': '5px'}}>Next</button>
                </div>
                <hr></hr>
            </span>
        );
    }
});

var UserDetail = React.createClass({
    render () {
        return (
            <div className="userDetail">
                <p>The description of users</p>
                <br />
                <UserDetailForm />
            </div>
        )
    }
});

var UserDetailForm = React.createClass({
    render () {
        return (
            <form className="userDetailForm" style={borderedForm}>
              <h3>User Detail</h3>
              <hr></hr>
              <input type="text" placeholder="handphone" /><br/>
              <input type="text" placeholder="email" />
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

ReactDOM.render(
    <UserBox source="api/users"/>,
    document.getElementById('content')
);