import React from 'react';

class TextGist extends React.Component {
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
    const {title, text, link} = this.props;
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <h2>{title}</h2>
        </div>
        <div className="mdl-cell mdl-cell--12-col">
          {text}
        </div>
        <div className="mdl-cell mdl-cell--12-col">
          <a
            className="mdl-button mdl-js-button mdl-js-ripple-effect"
            href={link}
          >
            {'Read More...'}
          </a>
        </div>
      </div>
    );
  }
}

TextGist.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.string,
  link: React.PropTypes.string
};

TextGist.defaultProps = {
  title: 'Title',
  text: 'Some texts',
  link: ''
};

export default TextGist;
