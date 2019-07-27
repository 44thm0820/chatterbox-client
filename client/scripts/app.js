var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    $('.username').on('click', function() {
      console.log('clicked user');
    });

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    $('.refresh').on('click', function() {
      App.fetch();
    });

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    $('#chats').empty();
    Parse.readAll((data) => {
      // examine the response from the server request:

      //transfer all data to Messages
      data.results.forEach( (message, i) => {
        Messages[i] = message;
      });
      MessagesView.render();

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
