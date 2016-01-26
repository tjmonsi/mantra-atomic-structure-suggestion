import React from 'react';

class SectionList extends React.Component {
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
  renderSections() {
    return this.props.sections.map((section, key) => {
      return (
        <div
          className="mdl-cell mdl-cell--12-col"
          key={key}
        >
          {section}
        </div>
      );
    });
  }
  render() {
    return (
      <div className="mdl-grid">
        {this.renderSections()}
      </div>
    );
  }
}

SectionList.propTypes = {
  sections: React.PropTypes.arrayOf(React.PropTypes.element)
};

SectionList.defaultProps = {
  sections: []
};

export default SectionList;
