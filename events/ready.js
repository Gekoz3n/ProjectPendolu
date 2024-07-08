const Event = require('../structures/event.js');

module.exports = new Event('ready', client => {
	console.log('--------- PendoluHelper is ready! ---------');
	client.user.setActivity(`${client.prefix}help`, { type: 'LISTENING' });
});
