var MessagesView = {

  $chats: $('#chats'),


  initialize: function() {
    MessagesView.$chats.on('click', 'div .username', MessagesView.handleAddFriends);
  },

  render: function() {

    $('#chats').empty();
    for (var key in Messages) {
      if (Messages[key].roomname === RoomsView.$select.find(':selected').text()) {
        MessagesView.renderMessage(Messages[key]);
      }
      if (Messages[key].roomname !== undefined) {
        Rooms.add(Messages[key].roomname);
      }
    }

  },

  renderMessage: function({username, roomname, text}) {

    //sanitize
    username = MessagesView.sanitize(username);
    text = MessagesView.sanitize(text);
    roomname = MessagesView.sanitize(roomname);


    //defaulting
    if (username === undefined) {
      username = '<anonymous>';
    }

    if (text === undefined) {
      text = '<empty message.';
    }

    if (roomname === undefined) {
      roomname = 'All Chatrooms';
    }

    //construct newly sanitized message
    var sanitizedMessage = {
      username: username,
      roomname: roomname,
      text: text,
    };

    //checks for if user is friend before render
    if (Friends[username]) {
      var $renderedMessage = MessageView.renderFriend(sanitizedMessage);
    } else {
      var $renderedMessage = MessageView.render(sanitizedMessage);
    }

    //adds message to chats
    $('#chats').append($renderedMessage);
  },

  handleAddFriends: function() {
    var username = $(this).text();
    console.log(username);
    if (username !== 'toggleStatus' ) {
      Friends.toggleStatus(username);
    }
    MessagesView.render();
  },

  sanitize: function (str) {
    var lt = /</g;
    var gt = />/g;
    var ap = /'/g;
    var ic = /"/g;

    return str.replace(lt, '&lt;').replace(gt, '&gt;').replace(ap, '&#39;').replace(ic, '&#34;');
  },
};