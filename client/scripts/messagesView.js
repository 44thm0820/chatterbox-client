var MessagesView = {

  $chats: $('#chats'),


  initialize: function() {
    MessagesView.$chats.on('click', 'div .username', MessagesView.handleAddFriends);
  },

  render: function() {

    // for(var i = 0; i < data.results.length; i++) {
    //   MessagesView.renderMessage(data.results[i]);
    //   if (data.results[i].roomname !== undefined) {
    //     Rooms.add(data.results[i].roomname);
    //   }
    // }
    $('#chats').empty();
    for(var key in Messages) {
      // console.log(Messages[key]);
      if(Messages[key].roomname === RoomsView.$select.find(':selected').text()) {
        MessagesView.renderMessage(Messages[key]);
      }
      if (Messages[key].roomname !== undefined) {
        Rooms.add(Messages[key].roomname);
      }
    }

  },

  renderMessage: function(message) {
    // if(message.text)
    var lt = /</g,
        gt = />/g,
        ap = /'/g,
        ic = /"/g;

    if(message.username === undefined) {
      message.username = 'no username provided';
    }

    if(message.text === undefined) {
      message.text = 'no text';
    } else {
      message.text = message.text.replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
    }

    if(message.roomname === undefined) {
      message.roomname = 'all messages';
    }

    // if(message.roomname === RoomsView.$select.find(':selected').text()) {
      if(Friends[message.username]) {
        var $renderedMessage = MessageView.renderFriend(message);
      } else {
        var $renderedMessage = MessageView.render(message);
      }
      $('#chats').append($renderedMessage);

    // }
  },

  handleAddFriends: function() {
    var username = $(this).text();
    // var username = this.text();
    // console.log(username);
    Friends.toggleStatus(username);
    MessagesView.render();
  },

};