import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

export default React.createClass({
  propTypes: {
    message: React.PropTypes.string.isRequired,
  },
  componentDidMount: function () {
    console.log(this.props.message);
    const content = (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>Error</h4>
        <p className="lead">{this.props.message}</p>
        <button className="button hollow" data-close="">Ok</button>
      </div>
    );

    const $modal = $(ReactDOMServer.renderToString(content));
    $(ReactDOM.findDOMNode(this)).html($modal);
    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    return (
      <div>
      </div>
    );
  },
});
