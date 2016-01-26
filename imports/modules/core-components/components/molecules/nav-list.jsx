import React from 'react';
import NavLink from './../atoms/nav-link.jsx';
import classNames from 'classnames';

class NavList extends React.Component {
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
  renderNavs() {
    return this.props.navs.map((nav, key) => {
      return (
        <NavLink
          href = {nav.link}
          label = {nav.label}
          key = {key}
        />
      );
    });
  }
  render() {
    const {position} = this.props;
    const basicClass = 'mdl-navigation';
    const classes = (position === 'app-bar') ?
      classNames(basicClass, 'mdl-layout--large-screen-only') : basicClass;
    return (
      <nav className={classes}>
        {this.renderNavs()}
      </nav>
    );
  }
}

NavList.propTypes = {
  navs: React.PropTypes.arrayOf(React.PropTypes.shape({
    link: React.PropTypes.string,
    label: React.PropTypes.string
  })),
  position: React.PropTypes.string
};

NavList.defaultProps = {
  navs: [],
  position: null
};

export default NavList;
