import React from 'react';

class AppBar extends React.Component {
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
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          {appTitle}
          <div className="mdl-layout-spacer"></div>
          {appNav}
        </div>
      </header>
    );
  }
}

AppBar.propTypes = {
  appTitle: React.PropTypes.element,
  appNav: React.PropTypes.element
};

AppBar.defaultProps = {
  appTitle: (<span className="mdl-layout-title">{'Title'}</span>),
  appNav: null
};

export default AppBar;
