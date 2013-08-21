// Generated by CoffeeScript 1.4.0

$(document).ready(function() {
  var ws;
  ws = new WebSocketRails('localhost:3000/websocket');
  ws.on_open = function() {
    return console.log('socket opened');
  };
  ws.bind('new_message', function(data) {
    console.log(data);
    return $('#chat_history').append('<br /><span>' + data['user'] + ':</label>' + data['text']);
  });
  $('#send_message').on('click', function() {
    ws.trigger('incoming_message', {
      text: $('#new_message').val()
    });
    return $('#new_message').val('');
  });
  return $('#set_name').on('click', function() {
    return ws.trigger('set_name', {
      name: $('#screen_name').val()
    });
  });
});
