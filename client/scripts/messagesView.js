var MessagesView = {

  $chats: $('#chats'),


  initialize: function() {
    MessagesView.$chats.on('click', '.username', MessagesView.handleAddFriends);
  },

  render: function() {

    // $('#chats').empty();
    for (var key in Messages) {
      if ((Messages[key].roomname === RoomsView.$select.find(':selected').text()) || (RoomsView.$select.find(':selected').text() === 'All')) {
        MessagesView.renderMessage(Messages[key]);
      }
      if ((Messages[key].roomname !== undefined) ||  (Messages[key].roomname !== null)){
        Rooms.add(Messages[key].roomname);
      }
    }

  },

  renderMessage: function({username, roomname, text, createdAt, updatedAt, shown}) {

    //defaulting
    if(!shown) {
      if (username === undefined) {
        username = '<anonymous>';
      }

      if (text === undefined) {
        text = '<empty message.';
      }

      if (roomname === undefined || roomname === null) {
        roomname = 'All Chatrooms';
      }

      //sanitize
      username = MessagesView.sanitize(username);
      text = MessagesView.sanitize(text);
      roomname = MessagesView.sanitize(roomname);

      //construct newly sanitized message with time
      var createdAt = new Date(createdAt);
      createdAt = createdAt.getTime();
      var time = MessagesView.timeDiff(createdAt);
      var sanitizedMessage = {
        username: username,
        roomname: roomname,
        text: text,
        time: time,
        createdAt: createdAt,
      };

      //checks for if user is friend before render

      var $renderedMessage = MessageView.render(sanitizedMessage);
      $('#chats').prepend($renderedMessage);
      arguments[0].shown = true;
    }

  },

  updateFriends: function() {
    $('.username').each(function(i){
      if(Friends[this.innerHTML]) {
        $(this).addClass('friend');
      } else {
        $(this).removeClass('friend');
      }
      // console.log($(this));
    });
  },

  updateTime: function() {
    $('.chat').each(function() {
      var time = $(this).find('.createAt');

      console.log(this.children);
    });
  },

  handleAddFriends: function() {

    //toggles clicked freind
    var username = this.innerHTML;
    // var username = $(this).text();
    if (username !== 'toggleStatus' ) {
      Friends.toggleStatus(username);
    }

    //re render
    MessagesView.updateFriends();
  },

  sanitize: function (str) {
    //replaces unwanted characters
    var lt = /</g;
    var gt = />/g;
    var ap = /'/g;
    var ic = /"/g;

    return str.replace(lt, '&lt;').replace(gt, '&gt;').replace(ap, '&#39;').replace(ic, '&#34;');
  },

  timeDiff: function(time) {
    var now = Date.now();
    var diff = now - time;
    var h = Math.floor(diff / 1000 / 60 / 60);
    if (h <= 23 && h > 0) {
      return `${h}h`;
    }
    var m = Math.floor(diff / 1000 / 60);
    if (m <= 59 && m > 0) {
      return `${m}m`;
    }
    var s = Math.floor(diff / 1000);
    if (m <= 59 && m >= 0) {
      return `${s}s`;
    }
    return MessagesView.formatTime(time);
  },

  //returns time in MMM DD format
  formatTime: function(time) {
    if(typeof time !== 'object') {
      time = new Date (time);
    }
    var formatted = time + '';
    formatted = formatted.split(' ');
    var month = formatted[1];
    var day = parseInt(formatted[2]);
    return `${month} ${day}`;
  }
};

