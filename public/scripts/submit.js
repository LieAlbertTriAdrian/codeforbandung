var ProjectForm = React.createClass({
  getInitialState: function() {
    return {title: '', description: ''};
  },
  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },
  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.state.title.trim();
    var description = this.state.description.trim();
    if (!description || !title) {
      return;
    }
    var project = {id: Date.now(), title: title, description: description};

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
      <form className="projectForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        /> <br />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.description}
          onChange={this.handleDescriptionChange}
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
