var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleAddRoom);
    RoomsView.$select.on('change', RoomsView.handleOnRoomChange);
  },

  render: function() {
  },

  renderRoom: function(room) {
    var $roomNode = $(`<option>${room}</option>`);
    // console.log('room text: ', room);
    // console.log($roomNode);
    RoomsView.$select.append($roomNode);

  },

  handleAddRoom: function() {
    Rooms.add($('#message').val());
    // console.log(`message: ${$('#message').val()}`);
    // RoomsView.renderRoom($('#message').val());
  },

  handleOnRoomChange: function() {
    console.log('a');
    App.fetch();
  },
};
