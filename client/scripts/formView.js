var FormView = {

  $form: $('form'),

  initialize: function() {
    //listener
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    //construct message
    if (RoomsView.$select.find(':selected').text() === 'All') {
      roomname = null;
    } else {
      var roomname = RoomsView.$select.find(':selected').text()
    }
    var message = {
      text: $('#message').val(),
      username: App.username,
      roomname: roomname,
    };

    //post message
    Parse.create(message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};