var timelineBar = {
  display: 'inline-block',
  width: '4px',
  background: 'black',
  height: '200px',
  margin: '15px 5px',
  'vertical-align': 'top',
  'border-radius': '3px'
};

var descriptionStyle = {
  display: 'inline-block',
  width: '75%',
  margin: '5px',
  'vertical-align': 'top'
};

var ProjectDetails = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      <div className="project">
        <div className="projectTitle">
          <h2>Title</h2>
          <hr></hr>
        </div>
        <div>
          <div className="picture">
          </div>
          <div style={descriptionStyle}>
            <span>The description of project.</span>
          </div>
        </div>
        <br />
        <div className="projectMembers">
          <h2>Project Members</h2>
          <hr></hr>
        </div>
        <div>
          <div className="picture small-picture">
          </div>
          <div style={descriptionStyle}>
            <h3>User 1</h3>
            <span className="grey-text">Project position</span><br />
            <span>Job description of User 1.</span>
          </div>
        </div>
        <br />
        <div style={{width: '100%'}}>
          <div style={{display: 'inline-block', width: '48%', margin: '8px'}}>
            <div className="timeline">
              <h2>Timeline</h2>
              <hr></hr>
            </div>
            <div>
              <div style={timelineBar}>
              </div>
              <div style={descriptionStyle}>
                <h3>Activity 1</h3>
                <span className="smaller-text grey-text">DD-MM-YYYY to DD-MM-YYYY</span><br />
                <span>Activity description.</span>
              </div>
            </div>
          </div>
          <div style={{display: 'inline-block', width: '48%', margin: '8px'}}>
            <div className="posts">
              <h2>Posts</h2>
              <hr></hr>
            </div>
            <div>
              <div className="picture small-picture">
              </div>
              <div style={descriptionStyle}>
                <h3>Post Title</h3>
                <span className="grey-text">User 1 - Project position</span><br />
                <span className="smaller-text grey-text">DD-MM-YYYY HH:MM</span><br />
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <ProjectDetails />,
  document.getElementById('content')
);