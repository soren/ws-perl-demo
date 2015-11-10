use Net::WebSocket::Server;
 
my $ws = Net::WebSocket::Server->new(
    listen => 8000,
    tick_period => 1,
    on_tick => sub {
        my ($serv) = @_;
        $_->send_utf8(time) for $serv->connections;
    },
   )->start;
