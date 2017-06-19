import React from 'react';

export default React.createClass({
  renderInnerContent: function () {
    let { temp, city, isLoading } = this.props;
    if (isLoading) {
      return (
        <svg><use xlinkHref="#spinner"></use></svg>
      );
    }
    if (city && temp) {
      return (
        <p>
          It's {temp} degrees &#8451; in {city}
        </p>
      );
    } else {
      return null;
    }
  },
  render: function () {
    return (
      <div className="weather-result">
        {this.renderInnerContent()}
      </div>
    );
  },
});

