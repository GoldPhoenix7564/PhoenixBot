const guilds = require('../config/guilds.json');
const fs = require('fs');

module.exports = {
    name: 'setjoinmessage',
    description: 'Set the server welcome message',
    usage: '<New Welcome Message>',
    args: true,
    server: true,
    owner: true,
    execute (message, args) {
        const join_message = args.join(' ');
        guilds[message.guild.id].welcome_message = join_message;
        fs.writeFileSync('./config/guilds.json', JSON.stringify(guilds, null, '    '));
        message.channel.send(`:white_check_mark: | Server welcome message has been set to \`${join_message}\``);
    }
}