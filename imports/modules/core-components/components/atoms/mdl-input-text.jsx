import React from 'react';
// import randomString from 'randomstring';

class MdlInputText extends React.Component {
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
  getValue() {
    return this.refs['mdl-text'].value;
  }
  render() {
    const {id, label} = this.props;
    return (
      <div className="mdl-textfield mdl-js-textfield">
        <input
          className="mdl-textfield__input"
          id={id}
          ref="mdl-text"
          type="text"
        />
        <label
          className="mdl-textfield__label"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    );
  }
}

MdlInputText.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string
};

MdlInputText.defaultProps = {
  id: 'input-text',
  label: 'Text'
};

export default MdlInputText;
