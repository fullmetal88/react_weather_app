import React from 'react';

export default React.createClass({
  componentDidMount: function () {
    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    return (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>Error</h4>
        <p className="lead">{this.props.message}</p>
        <button className="button hollow" data-close="">Ok</button>
      </div>
    );
  },
});
