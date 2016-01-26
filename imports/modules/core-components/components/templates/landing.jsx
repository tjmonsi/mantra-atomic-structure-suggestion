import React from 'react';

class Landing extends React.Component {
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
    const {appBar, appDrawer, content, footer} = this.props;
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          {appBar}
          {appDrawer}
          <main className="mdl-layout__content">
            {content}
            {footer}
          </main>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  appBar: React.PropTypes.element,
  appDrawer: React.PropTypes.element,
  content: React.PropTypes.element,
  footer: React.PropTypes.element
};

Landing.defaultProps = {
  appBar: null,
  appDrawer: null,
  content: null,
  footer: null
};

export default Landing;
