const guilds = require('../config/guilds.json');
const fs = require('fs');

module.exports = {
    name: 'setprefix',
    description: 'Set the server prefix',
    usage: '<New Prefix>',
    server: true,
    args: true,
    owner: true,
    execute (message, args) {
        const prefix = args[0];
        guilds[message.guild.id].prefix = prefix;
        fs.writeFileSync('./config/guilds.json', JSON.stringify(guilds, null, '    '));
        message.channel.send(`:white_check_mark: | Server prefix has been set to \`${prefix}\``);
    }
}