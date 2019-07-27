var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  hasUpdates: false,

  initialize: function() {
    App.username = window.location.search.substr(10);


    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    //auto updater
    // setInterval(App.fetch, 500);
    setInterval(function() {
      // console.log(App.fetch());
      // console.log(data);
      App.fetch();
      if(App.hasUpdates) {
        MessagesView.render();
      };
      App.hasUpdates = false;
    }, 300)
    // setInterval(MessagesView.render, 500);

  },

  fetch: function(callback = ()=>{}) {
    // $('#chats').empty();
    Parse.readAll((data) => {
      // examine the response from the server request:
      var msgs = data.results;
      for (var i = msgs.length-1; i >= 0; i--) {
        var objectId = msgs[i].objectId;
        if(Messages[objectId]) {

        } else {
          delete msgs[i].objectId;
          msgs[i].shown = false;
          Messages[objectId] = msgs[i];
          App.hasUpdates = true;
        }
      }
      callback();
    });
    // console.log(data);
    // return data;
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
