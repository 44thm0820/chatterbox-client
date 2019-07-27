var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);


    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    //auto updater
    setInterval(App.fetch, 500);
    setInterval(MessagesView.render, 500);

  },

  fetch: function(callback = ()=>{}) {
    // $('#chats').empty();
    Parse.readAll((data) => {
      // examine the response from the server request:
      var msgs = data.results;
      for (var i = msgs.length-1; i >= 0; i--) {
        var objectId = msgs[i].objectId;
        delete msgs[i].objectId;
        msgs[i].shown = false;
        Messages[objectId] = msgs[i];
      }
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
