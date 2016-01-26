import React from 'react';

class Comment extends React.Component {
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
    const {title, text} = this.props;
    return (
      <div className="mdl-grid">        
        <div className="mdl-cell mdl-cell--12-col">
          {text}
        </div>        
      </div>
    );
  }
}

Comment.propTypes = {
  text: React.PropTypes.string,
};

Comment.defaultProps = {  
  text: 'Some texts'
};

export default Comment;
