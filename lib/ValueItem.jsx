var React = require('react/addons');

var ValueItem = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onSelect: React.PropTypes.func,
  },

  getInitialState: function() {
    return {
      isSelected: false,
      hasPossibilities: true,
    };
  },

  handleClick: function(e) {
    e.preventDefault();
    this.props.onSelect(this.props.value);
  },

  render: function() {
    var classes = React.addons.classSet({
      'value': true,
      'active': this.props.value.isActive,
    });
    return (
      <li className={classes} key={this.props.value.name}>
        <a key={this.props.value.name}
           onClick={this.handleClick}
           href="#">
            {this.props.value.name}
        </a>
      </li>
    );
  }
});

module.exports = ValueItem;
