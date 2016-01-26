import React from 'react';

class MdlButton extends React.Component {
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
    const {label} = this.props;
    return (
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
        onClick={this.props.callback}
      >
        {label}
      </button>
    );
  }
}

MdlButton.propTypes = {
  label: React.PropTypes.string,
  callback: React.PropTypes.func
};

MdlButton.defaultProps = {
  label: 'Button',
  callback: () => null
};

export default MdlButton;
