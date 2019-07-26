var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
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
    }

    if(message.text !== undefined) {
      message.text = message.text.replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
    }
    var $renderedMessage = MessageView.render(message);
    var domNode = $('<div></div>');
    $('#chats').append($renderedMessage);

  },

};