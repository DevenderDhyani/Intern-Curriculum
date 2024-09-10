// import { createClient } from 'redis';
const { createClient } = require("redis")

const client = createClient({
    password: 'msVFNxs19YgFxEJRaIh7rEtbcf6nCyZk',
    socket: {
        host: 'redis-14528.c8.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 14528
    }
});

client.connect().then(data => {
    console.log('working : ')

}).catch(e => { console.log() })


module.exports = client