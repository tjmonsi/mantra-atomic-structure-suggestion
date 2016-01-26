import React from 'react';
// import randomString from 'randomstring';

class MdlTextarea extends React.Component {
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
    return this.refs['mdl-textarea'].value;
  }
  render() {
    const {id, label} = this.props;
    return (
      <div className="mdl-textfield mdl-js-textfield">
        <textarea
          className="mdl-textfield__input"
          id={id}
          rows= "3"
          ref="mdl-textarea"
          type="text"
        >
        </textarea>
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

MdlTextarea.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string
};

MdlTextarea.defaultProps = {
  id: 'textarea',
  label: 'Text'
};

export default MdlTextarea;
