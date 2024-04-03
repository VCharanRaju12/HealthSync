// BackgroundVideo.js

import React from 'react';

class BackgroundVideo extends React.Component {
  render() {
    return (
      <div className="video-container-fluid">
        <video autoPlay muted loop>
          <source src={this.props.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default BackgroundVideo;
