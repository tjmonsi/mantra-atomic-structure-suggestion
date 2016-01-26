import React from 'react';

class AppDrawer extends React.Component {
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
    const {appTitle, appNav} = this.props;
    return (
      <div className="mdl-layout__drawer">
        {appTitle}
        {appNav}
      </div>
    );
  }
}

AppDrawer.propTypes = {
  appTitle: React.PropTypes.element,
  appNav: React.PropTypes.element
};

AppDrawer.defaultProps = {
  appTitle: (<span className="mdl-layout-title">{'Title'}</span>),
  appNav: null
};

export default AppDrawer;
