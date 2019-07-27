var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //listener
    RoomsView.$button.on('click', RoomsView.handleAddRoom);
    RoomsView.$select.on('change', RoomsView.handleOnRoomChange);
    Rooms.add('All');
  },

  render: function() {
  },

  renderRoom: function(room) {
    //render rooms
    var $roomNode = $(`<option>${room}</option>`);
    RoomsView.$select.append($roomNode);

  },

  handleAddRoom: function() {
    Rooms.add($('#message').val());
  },

  handleOnRoomChange: function() {
    MessagesView.render();
  },
};
