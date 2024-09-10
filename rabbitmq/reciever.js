// // consumer.js

// const amqp = require('amqplib');

// async function consume() {
//     try {
//         // Connect to RabbitMQ server
//         const connection = await amqp.connect('amqp://localhost');
//         const channel = await connection.createChannel();

//         // Define exchange, queue, and binding
//         const exchange = 'orders-exchange';
//         const queue = 'inventory-queue';
//         const routingKey = 'order.created';

//         // Create exchange and queue
//         await channel.assertExchange(exchange, 'topic', { durable: true });
//         await channel.assertQueue(queue, { durable: true });
//         await channel.bindQueue(queue, exchange, routingKey);

//         // Consume messages from queue
//         console.log('Waiting for messages...');
//         channel.consume(queue, (msg) => {
//             if (msg.content) {
//                 const message = JSON.parse(msg.content.toString());
//                 console.log('Received message:', message);

//                 // Acknowledge message
//                 channel.ack(msg);
//             }
//         });
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// consume();



const amqp = require('amqplib');

const QUEUE = 'test-queue';  // Replace with your queue name

const consumeMessages = async () => {
    try {
        // Connect to RabbitMQ server
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();

        // Assert a queue (create if not exists)
        await channel.assertQueue(QUEUE);

        // Consume messages from the queue
        console.log('Waiting for messages...');
        channel.consume(QUEUE, (msg) => {
            if (msg !== null) {
                console.log(`Received message: ${msg.content.toString()}`);
                channel.ack(msg); // Acknowledge the message
            }
        });
    } catch (error) {
        console.error('Error consuming messages:', error);
    }
};

consumeMessages().catch(console.error);