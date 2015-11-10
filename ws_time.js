$(function () {
	window.WebSocket = window.WebSocket || window.MozWebSocket;
    var connection = new WebSocket('ws://127.0.0.1:8000');
	
    connection.onopen = function () {
 		$('#status').attr('class','connected').text('Connected!');
    };

    connection.onerror = function (error) {
		$('#status').attr('class','error').text('Error connecting!');
    };

    connection.onmessage = function (message) {
		try {
			var json = JSON.parse(message.data);
			$('#timer').show();
			$('#time').text(json);
		} catch (e) {
			console.log('This doesn\'t look like a valid JSON: ', message.data);
			return;
		}
    };
});
