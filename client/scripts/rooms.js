var Rooms = {

  add: function(roomName) {

    // console.log(RoomsView.$select);
    // $('option').each(function(e){
    //   console.log(e);
    // });

    var dupRoomName = false;
    for(var i = 0; i < RoomsView.$select.children().length;i++) {
      var roomNameString = RoomsView.$select.children()[i].value;
      if (roomNameString === roomName) {
        dupRoomName = true;
        break;
      }
    };

    if(!dupRoomName) {
      RoomsView.renderRoom(roomName);
    }
  },
};