const Gamedig = require('gamedig');

setInterval(() => {
    Gamedig.query({
        type: 'minecraftbedrock',
        host: 'wworld0.falixsrv.me',
        port: 19306
    })
    .then((state) => {
        console.log(`Server is alive: ${state.players.length} players online`);
    })
    .catch((error) => {
        console.error('Server is offline:', error);
    });
}, 5 * 60 * 1000);
