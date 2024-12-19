import ollama from "ollama";

const prompt = "what is AI?";
const output = await ollama.generate({
  model: "mistral",
  prompt: prompt,
});

console.log(output);
