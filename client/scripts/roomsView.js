var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function(room) {
    var $roomNode = $(`<div></div>`)
    RoomsView.$select.append($roomNode);
  }
};
