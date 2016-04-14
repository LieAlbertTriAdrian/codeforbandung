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
