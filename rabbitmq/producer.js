// // publisher.js

// const amqp = require('amqplib');

// async function publish() {
//     try {
//         // Connect to RabbitMQ server
//         const connection = await amqp.connect('amqp://localhost');
//         const channel = await connection.createChannel();

//         // Define exchange and queue
//         const exchange = 'orders-exchange';
//         const routingKey = 'order.created';

//         // Create exchange
//         await channel.assertExchange(exchange, 'topic', { durable: true });

//         // Publish message
//         const message = { orderId: 123, userId: 456, product: 'Laptop' };
//         channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(message)));

//         console.log('Message published:', message);

//         // Close connection
//         setTimeout(() => {
//             connection.close();
//         }, 500);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// publish('hello').catch(console.error('err'));



const amqp = require('amqplib');

const QUEUE = 'test-queue';  // Replace with your queue name

const sendMessage = async (message) => {
    try {
        // Connect to RabbitMQ server
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();

        // Assert a queue (create if not exists)
        await channel.assertQueue(QUEUE, { durable: true });

        // Send a message to the queue
        channel.sendToQueue(QUEUE, Buffer.from(message), { persistent: true });
        console.log(`Message sent: ${message}`);
        // Close the connection
        setTimeout(() => {
            // channel.close();
            // connection.close();
        }, 500);
    } catch (error) {
        console.error('Error sending message:', error);
    }
};

sendMessage('Hello RabbitMQ!').catch(console.error);