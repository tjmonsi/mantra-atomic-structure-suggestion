import React from 'react';

class AppTitle extends React.Component {
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
    const {title} = this.props;
    return (
      <div className="mdl-layout-title">
        {title}
      </div>
    );
  }
}

AppTitle.propTypes = {
  title: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ])
};

AppTitle.defaultProps = {
  title: 'Title',
};

export default AppTitle;
