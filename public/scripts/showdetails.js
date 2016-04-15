var pictureStyle = {
  display: 'inline-block',
  width: '20%',
  background: '#999999',
  height: '200px',
  margin: '5px',
  'vertical-align': 'top'
};

var smallPictureStyle = {
  display: 'inline-block',
  width: '50px',
  background: '#999999',
  height: '70px',
  margin: '5px',
  'vertical-align': 'top'
};

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

var dateTimeline = {
  color: '#555555',
  'font-size': '12px'
};

var inlineBlock = {
  display: 'inline-block',
  width: '48%',
  margin: '8px'
};

var positionStyle = {
  color: '#777777'
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
          <div style={pictureStyle}>
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
          <div style={smallPictureStyle}>
          </div>
          <div style={descriptionStyle}>
            <h3>User 1</h3>
            <span style={positionStyle}>Project position</span><br />
            <span>Job description of User 1.</span>
          </div>
        </div>
        <br />
        <div style={{width: '100%'}}>
          <div style={inlineBlock}>
            <div className="timeline">
              <h2>Timeline</h2>
              <hr></hr>
            </div>
            <div>
              <div style={timelineBar}>
              </div>
              <div style={descriptionStyle}>
                <h3>Activity 1</h3>
                <span style={dateTimeline}>DD-MM-YYYY to DD-MM-YYYY</span><br />
                <span>Activity description.</span>
              </div>
            </div>
          </div>
          <div style={inlineBlock}>
            <div className="posts">
              <h2>Posts</h2>
              <hr></hr>
            </div>
            <div>
              <div style={smallPictureStyle}>
              </div>
              <div style={descriptionStyle}>
                <h3>Post Title</h3>
                <span style={positionStyle}>User 1 - Project position</span><br />
                <span style={dateTimeline}>DD-MM-YYYY HH:MM</span><br />
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