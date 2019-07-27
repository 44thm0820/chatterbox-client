var Rooms = {

  add: function(roomName) {

    // prevents adding duplicate rooms
    var dupRoomName = false;
    for (var i = 0; i < RoomsView.$select.children().length; i++) {
      var roomNameString = RoomsView.$select.children()[i].value;
      if (roomNameString === roomName) {
        dupRoomName = true;
        break;
      }
    }

    if (!dupRoomName && roomName !== null && roomName !== undefined) {
      RoomsView.renderRoom(roomName);
    }
  },
};