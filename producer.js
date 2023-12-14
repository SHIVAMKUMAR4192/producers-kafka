const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const produceMessage = async () => {
  await producer.connect();

  const message = {
    value: "Hello from application 1",
  };

  const sendResult = await producer.send({
    topic: "my-topic",
    messages: [message],
  });

  if (!sendResult.error) {
    console.log("Message sent successfully!");
  } else {
    console.error(`Error sending message: ${sendResult.error.message}`);
  }
  await producer.disconnect();
};

produceMessage();
