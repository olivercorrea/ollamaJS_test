import ollama from "ollama";
// ! require does not work
// const ollama = require('ollama');

const response = await ollama.chat({
  model: "mistral",
  messages: [{ role: "user", content: "What is AI?" }],
});
console.log(response.message.content);
