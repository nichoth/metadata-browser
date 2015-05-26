var React = require('react');
var FieldItem = require('./lib/FieldItem.jsx');

var Browser = React.createClass({

  propTypes: {
    fields: React.PropTypes.array.isRequired,
  },

  componentDidMount: function() {
  },

  // trigger action on pair (field + value) selected
  handlePairSelect: function(pair) {
    console.log('in FieldBrowser.handlePairSelect', pair);
  },

  render: function() {
    var style = {
      listStyle: 'none'
    };

    return (
      <ul style={style}>
      {this.props.fields.map(function(field, i) {
        return (
            <FieldItem
              key={i}
              field={field}
              onSelect={this.handlePairSelect}
            />
        );
      }, this)}
      </ul>
    );
  }

});

module.exports = Browser;
