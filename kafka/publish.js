// producer.js
// producer.js or subscriber.js
process.env.KAFKAJS_NO_PARTITIONER_WARNING = '1';
// const { Kafka } = require('kafkajs');

// // Create a Kafka instance
// const kafka = new Kafka({
//     clientId: 'my-app',
//     brokers: ['localhost:9092']
// });

// // Create a producer
// const producer = kafka.producer();

// const run = async () => {
//     await producer.connect();
//     console.log('Producer connected');

//     // Send messages
//     await producer.send({
//         topic: 'test-topic', // Replace with your topic name
//         messages: [
//             { value: 'Hello Kafka!' },
//             { value: 'This is a message from Kafka producer.' }
//         ],
//     });

//     console.log('Messages sent');
//     await producer.disconnect();
// };

// run().catch(console.error);




// producer.js

// const { Kafka } = require('kafkajs');

// const kafka = new Kafka({
//     clientId: 'my-app',
//     brokers: ['localhost:9092'] // Replace with your Kafka broker address
// });

// const producer = kafka.producer();

// const run = async () => {
//     await producer.connect();
//     console.log('Producer connected');

//     await producer.send({
//         topic: 'test-topic',
//         messages: [
//             { value: 'Hello Kafka!' },
//             { value: 'This is a message from Kafka producer.' }
//         ],
//     });

//     console.log('Messages sent');
//     await producer.disconnect();
// };

// run().catch(console.error);




















const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092'] // Replace with your Kafka broker address
});

const producer = kafka.producer();

const run = async () => {
    await producer.connect();
    console.log('Producer connected');

    await producer.send({
        topic: 'test-topic',
        messages: [
            { value: 'Hello Kafka!' },
            { value: 'This is a message from Kafka producer.' }
        ],
    });

    console.log('Messages sent');
    await producer.disconnect();
};

run().catch(console.error);






















// const { Kafka } = require("kafkajs")

// // Create a Kafka instance
// const kafka = new Kafka({
//     clientId: 'my-app',
//     brokers: ['localhost:9092']  // Replace with your Kafka broker addresses
// });

// // Create a producer
// const producer = kafka.producer();

// const runProducer = async () => {
//     await producer.connect();
//     console.log('Producer connected');

//     // Send a message to a topic
//     await producer.send({
//         topic: 'test-topic',  // Replace with your topic name
//         messages: [{ value: 'Hello KafkaJS user!' }],
//     });

//     console.log('Message sent');

//     await producer.disconnect();
// };

// runProducer().catch(console.error);