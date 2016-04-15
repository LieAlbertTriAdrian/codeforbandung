var TimelineBar = {
  display: 'inline-block',
  width: '4px',
  background: 'black',
  height: '200px',
  margin: '15px 5px',
  verticalAlign: 'top',
  borderRadius: '3px'
};

var Activity = React.createClass({
  render: function() {
    return (
      <div className="activity">
        <h3>{this.props.activity}</h3>
        <span className="smaller-text grey-text">{this.props.startDate} to {this.props.endDate}</span><br />
      </div>
    );
  }
});

var Timeline = React.createClass({
  loadTimelineFromServer: function() {
        console.log("loadTimelineFromServer");
        $.ajax({
          url: '/api/timelines',
          dataType: 'json',
          success: function (response) {
              this.setState({ data: response.data });
          }.bind(this),
          error: function (xhr, status, err) {
              console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
        console.log(this.state.data.length);
        document.getElementById("bar").style.height=200*this.state.data.length+'px';
    },
    getInitialState: function() {
        return { data: [] };
    },
    componentDidMount: function() {
        this.loadTimelineFromServer();
        setInterval(this.loadTimelineFromServer, 2000);
    },
  render: function() {
    var TimelineNodes = this.state.data.map(function(activity) {
      return (
        <Activity activity={activity.activity} key={activity.id} startDate={activity.startDate} endDate={activity.endDate} />
      );
    });
    return (
      <div>
        <div className="timeline">
          <h2>Timeline</h2>
          <hr></hr>
        </div>
        <div>
          <div id="bar" style={TimelineBar}>
          </div>
          <div className="description activityList">
            { TimelineNodes }
          </div>
        </div>
      </div>
    );
  }
});

var TimelineForm = React.createClass({
  getInitialState: function() {
      return { activity: '', startDate: '', endDate: '', projectId: '1' };
  },
  handleactivityChange: function(e) {
      this.setState({ activity: e.target.value });
  },
  handlestartDateChange: function(e) {
      this.setState({ startDate: e.target.value });
  },
  handleendDateChange: function(e) {
      this.setState({ endDate: e.target.value });
  },
  handleSubmit: function(e) {
      e.preventDefault();
      console.log("asdfasdfasfdasf");
      var activity = this.state.activity.trim();
      var startDate = this.state.startDate.trim();
      var endDate = this.state.endDate.trim();

      if (!activity || !startDate || !endDate) {
          return;
      }

      var TimelineAct = { activity: activity, startDate: startDate, endDate: endDate, projectId: '1' };

      this.props.onTimelineSubmit(TimelineAct);
      
  },
  render: function() {
      return (
        <form className="timelineForm" onSubmit= {this.handleSubmit }>
          <input
            type="text"
            placeholder="Activity title"
            value={ this.state.activity }
            onChange={ this.handleactivityChange }
          /> <br />
          <input
            type="text"
            placeholder="Start time"
            value={ this.state.startDate }
            onChange={ this.handlestartDateChange }
            style={{width: '49%', marginRight: '10px'}}
          />
          <input
            type="text"
            placeholder="End time"
            value={ this.state.endDate }
            onChange={ this.handleendDateChange }
            style={{width: '48%'}}
          /> <br />
          <input type="submit" value="Post" className="button" style={{width: '100%'}} />
        </form>
      );
  }
});

var ProjectDetails = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  handleTimelineSubmit: function(timelineAct) {
    //console.log(JSON.stringify(TimelineAct));
    $.ajax({
        url: '/api/timelines/',
        dataType: 'json',
        type: 'POST',
        data: timelineAct,
        success: function(activities) {
            this.setState({activities: activities})
            document.getElementById("bar").style.height=document.getElementById("bar").style.height+'400px';
        }.bind(this),
        error: function(xhr, status, err) {
            alert("Failed to create new activity");
            console.log('/api/timelines', status, err.toString());
        }.bind(this)
    });
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
          <div className="description">
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
          <div className="description">
            <h3>User 1</h3>
            <span className="grey-text">Project position</span><br />
            <span>Job description of User 1.</span>
          </div>
        </div>
        <br />
        <div style={{width: '100%'}}>
          <div style={{display: 'inline-block', verticalAlign: 'top', width: '48%', margin: '8px'}}>
            <Timeline />
            <div>
            <TimelineForm onTimelineSubmit={this.handleTimelineSubmit} />
            </div>
          </div>
          <div style={{display: 'inline-block', verticalAlign: 'top', width: '48%', margin: '8px'}}>
            <div className="posts">
              <h2>Posts</h2>
              <hr></hr>
            </div>
            <div>
              <div className="picture small-picture">
              </div>
              <div className="description">
                <h3>Post title</h3>
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