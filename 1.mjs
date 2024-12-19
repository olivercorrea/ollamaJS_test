import ollama from "ollama";

const output = await ollama.generate({
  model: "mistral",
  prompt: "",
});
