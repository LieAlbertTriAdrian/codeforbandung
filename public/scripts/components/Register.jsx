var RegisterForm = React.createClass({
  getInitialState: function() {
      return { name: '',position: '', handphone: '', email: '' };
  },
  handleName: function(e) {
      this.setState({ name: e.target.value });
  },
  handlePosition: function(e) {
      this.setState({ position: e.target.value });
  },
  handleHandphone: function(e) {
      this.setState({ handphone: e.target.value });
  },
  handleEmail: function(e) {
      this.setState({ email: e.target.value });
  },
  handleSubmit: function(e) {
      e.preventDefault();

      var name = this.state.title.trim();
      var position = this.state.description.trim();
      var handphone = this.state.handphone.trim();
      var email = this.state.email.trim();

      if (!name || !position || !handphone || !email) {
          return;
      }

      var user = { name: name, position: position, handphone: handphone, email: email };

      $.ajax({
          url: this.props.url,
          dataType: 'json',
          type: 'POST',
          data: user,
          success: function(data) {
              window.location.replace("/");
          }.bind(this),
          error: function(xhr, status, err) {
              alert("Failed to create new user");
              console.error(this.props.url, status, err.toString());
          }.bind(this)
      });
  },
  render: function() {
      return (
        <form className="userForm" onSubmit= { this.handleSubmit }>
          <input type="text" placeholder="Name" value={ this.state.name } onChange={ this.handleNameChange } /> <br />
          <input type="text" placeholder="Position" value={ this.state.position } onChange={ this.handlePositionChange } /> <br />
          <input type="text" placeholder="Handphone" value={ this.state.handphone } onChange={ this.handleHandphoneChange } /> <br />
          <input type="text" placeholder="Email" value={ this.state.email } onChange={ this.handleEmailChange } /> <br />
          <input type="submit" value="Post" />
        </form>
      );
  }
});

ReactDOM.render(
  <RegisterForm url="/api/users" />,
  document.getElementById('content')
);
