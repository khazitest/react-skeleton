var React = require('react');
var createReactClass = require('create-react-class');
var ListItem = require('./ListItem.jsx');

var ingredients = [
  { id: 1, text: "khazi" },
  { id: 2, text: "Afzal" },
  { id: 3, text: "Pasha" }
];
var List = createReactClass({
  render: function () {
    var listItems = ingredients.map(function (item) {
      return (
        <ListItem key={item.id} ingredient={item.text}></ListItem>
      );
    });
    return (
      <ul>
        {listItems}
      </ul>
    )
  }
});

module.exports = List;
