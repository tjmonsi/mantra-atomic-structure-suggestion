import React from 'react';

class Article extends React.Component {
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
  renderAfterArticle() {
    const {afterArticle} = this.props;
    if (afterArticle) {
      return (
        <div className="mdl-cell mdl-cell--12-col">
          {() => (afterArticle)}
        </div>
      );
    }
  }
  render() {
    const {title, text} = this.props;
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <h2>{title}</h2>
        </div>
        <div className="mdl-cell mdl-cell--12-col">
          {text}
        </div>
        {this.renderAfterArticle()}
      </div>
    );
  }
}

Article.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.string,
  afterArticle: React.PropTypes.element
};

Article.defaultProps = {
  title: 'Title',
  text: 'Some texts'
};

export default Article;
