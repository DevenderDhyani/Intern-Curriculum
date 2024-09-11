// consumer.js

process.env.KAFKAJS_NO_PARTITIONER_WARNING = '1';
// const { Kafka } = require('kafkajs');

// // producer.js or subscriber.js

// // Create a Kafka instance
// const kafka = new Kafka({
//     clientId: 'my-app',
//     brokers: ['localhost:9092'] // Replace with your Kafka broker address
// });

// // Create a consumer
// const consumer = kafka.consumer({ groupId: 'test-group' });

// const run = async () => {
//     await consumer.connect();
//     console.log('Consumer connected');

//     await consumer.subscribe({ topic: 'test-topic', fromBeginning: true }); // Replace with your topic name

//     // Listen for messages
//     await consumer.run({
//         eachMessage: async ({ topic, partition, message }) => {
//             console.log(`Received message: ${message.value.toString()}`);
//         },
//     });
// };

// run().catch(console.error);





// consumer.js

// const { Kafka } = require('kafkajs');

// const kafka = new Kafka({
//     clientId: 'my-app',
//     brokers: ['localhost:9092'] // Replace with your Kafka broker address
// });

// // Create consumers for different groups
// const consumer1 = kafka.consumer({ groupId: 'group1' });
// const consumer2 = kafka.consumer({ groupId: 'group2' });

// const run = async () => {
//     await Promise.all([
//         consumer1.connect(),
//         consumer2.connect(),
//     ]);

//     console.log('Consumers connected');

//     await Promise.all([
//         consumer1.subscribe({ topic: 'test-topic', fromBeginning: true }),
//         consumer2.subscribe({ topic: 'test-topic', fromBeginning: true }),
//     ]);

//     // Listen for messages
//     await Promise.all([
//         consumer1.run({
//             eachMessage: async ({ topic, partition, message, commitOffsetsIfNecessary }) => {
//                 console.log(`Group1 received message: ${message.value.toString()}`);
//                 await commitOffsetsIfNecessary(); // Manually commit offsets
//             },
//         }),
//         consumer2.run({
//             eachMessage: async ({ topic, partition, message, commitOffsetsIfNecessary }) => {
//                 console.log(`Group2 received message: ${message.value.toString()}`);
//                 await commitOffsetsIfNecessary(); // Manually commit offsets
//             },
//         }),
//     ]);
// };

// run().catch(console.error);


















const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
});

// Create consumers for different groups
const consumer1 = kafka.consumer({ groupId: 'group1' });
const consumer2 = kafka.consumer({ groupId: 'group2' });
// Add more consumers as needed with unique group IDs

const run = async () => {
    await Promise.all([
        consumer1.connect(),
        consumer2.connect(),
        // Connect more consumers if needed
    ]);

    console.log('Consumers connected');

    await Promise.all([
        consumer1.subscribe({ topic: 'test-topic', fromBeginning: true }),
        consumer2.subscribe({ topic: 'test-topic', fromBeginning: true }),
        // Subscribe more consumers if needed
    ]);

    // Listen for messages
    await Promise.all([
        consumer1.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log(`Consumer1 received message: ${message.value.toString()}`);
            },
        }),
        consumer2.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log(`Consumer2 received message: ${message.value.toString()}`);
            },
        }),
        // Run more consumers if needed
    ]);
};

run().catch(console.error);


















// const { Kafka } = require("kafkajs")
// // Create a Kafka instance
// const kafka = new Kafka({
//     clientId: 'my-app',
//     brokers: ['localhost:9092']  // Replace with your Kafka broker addresses
// });

// // Create a consumer
// const consumer = kafka.consumer({ groupId: 'test-group' });

// const runConsumer = async () => {
//     await consumer.connect();
//     console.log('Consumer connected');

//     // Subscribe to a topic
//     await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

//     // Process messages from the topic
//     await consumer.run({
//         eachMessage: async ({ topic, partition, message }) => {
//             console.log(`Received message: ${message.value.toString()}`);
//         },
//     });
// };

// runConsumer().catch(console.error);