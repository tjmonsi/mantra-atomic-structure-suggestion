import React from 'react';

class NavLink extends React.Component {
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
    const {label, href} = this.props;
    return (
      <a
        className="mdl-navigation__link"
        href={href}
      >
        {label}
      </a>
    );
  }
}

NavLink.propTypes = {
  href: React.PropTypes.string,
  label: React.PropTypes.string
};

NavLink.defaultProps = {
  href: '',
  label: 'Dead Link'
};

export default NavLink;
