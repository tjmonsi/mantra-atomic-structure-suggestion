import React from 'react';
// import randomString from 'randomstring';
import {default as MdlTextarea} from './../atoms/mdl-textarea.jsx';
import {default as MdlButton} from './../atoms/mdl-button.jsx';

class CommentEditor extends React.Component {
  constructor() {
    super();
    this._submit = this._submit.bind(this);
  }
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
  _submit() {
    const {submit, callback} = this.props;
    const {text} = this.refs;
    submit(text.getValue(), callback);
  }
  render() {
    const {id} = this.props;
    return (
      <div className="mdl-grid mdl-grid--no-spacing">        
        <div className="mdl-cell mdl-cell--12-col">
          <MdlTextarea
            id={`article-text-${id}`}
            label="Text..."
            ref={"text"}
          />
        </div>
        <div className="mdl-cell mdl-cell--12-col">
          <MdlButton
            label="Submit"
            callback={this._submit}
          />
        </div>
      </div>
    );
  }
}

CommentEditor.propTypes = {
  id: React.PropTypes.string,
  submit: React.PropTypes.func,
  callback: React.PropTypes.func
};

CommentEditor.defaultProps = {
  id: 'comment-editor',
  submit: () => null,
  callback: () => null
};

export default CommentEditor;
