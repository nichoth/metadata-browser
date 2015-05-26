var React = require('react'),
    TreeView = require('react-treeview'),
    ValueItem = require('./ValueItem.jsx'),
    FancyTextField = require('react-fancy-field');


module.exports = React.createClass({
  propTypes: {
    field: React.PropTypes.object.isRequired,
    onSelect: React.PropTypes.func,
  },

  handleValueSelect: function(val) {
    this.props.onSelect({
      field: this.props.field,
      value: val
    });
  },

  _saveEdit: function(data) {
    console.log("bla");
  },

  _deleteField: function() {
    console.log("delete");
  },

  // Expand/collapse this field on click.
  handleClick: function() {
    this.setState({collapsed: !this.state.collapsed});
  },

  render: function() {
    console.log(this.props);
    var name = this.props.field.name;

    var fancyText = (
      <span className="tree-view-node" onClick={this.handleClick}>
        {name}
      </span>
    );

    var label = (
      <FancyTextField
        textNode={fancyText}
        onSave={this._saveEdit}
        onDelete={this._deleteField} />
    );

    var vals = this.props.field.values;

    return (
      <TreeView
        nodeLabel={label}
        defaultCollapsed={false}
        onClick={this.handleClick}
      >

        {vals.map(function(val) {
          return (
            <ValueItem
              key={val.id}
              value={val}
              onSelect={this.handleValueSelect}
            />
          );
        }, this)}

      </TreeView>
    );
  }
});
