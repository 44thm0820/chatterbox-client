var MessageView = {

  //regular template
  render: _.template(`
      <div class="chat">
        <div>
          <span class="username"><%= username%></span>
          <span class='time'> &#183 <%= time%></span>
        </div>
        <div class='text'><%= text %></div>
      </div>
    `),

  //friends template
  renderFriend: _.template(`
    <div class="chat">
      <div>
        <span class="username friend"><%= username%></span>
        <span class='time'> &#183 <%= time%></span>
      </div>
      <div class='text'><%= text %></div>
    </div>

  `)

};