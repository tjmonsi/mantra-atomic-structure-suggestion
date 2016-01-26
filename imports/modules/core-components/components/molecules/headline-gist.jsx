import React from 'react';

class HeadlineGist extends React.Component {
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  render() {
    const {headline, gist, link} = this.props;
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <a href={link} ><h2>{headline}</h2></a>
        </div>
        <div className="mdl-cell mdl-cell--12-col">
          {gist}
        </div>
      </div>
    );
  }
}

HeadlineGist.propTypes = {
  headline: React.PropTypes.string,
  gist: React.PropTypes.string,
  link: React.PropTypes.string,
};

HeadlineGist.defaultProps = {
  headline: 'Title',
  gist: 'Some texts',
  link: ''
};

export default HeadlineGist;
