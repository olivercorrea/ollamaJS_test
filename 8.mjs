import { Ollama } from "ollama";

const ollama = new Ollama({ host: "oliverRemoteOllamaApi" }); // for remote server
const prompt = "what is AI?";

const output = await ollama.generate({ model: "mistral", prompt: prompt });

console.log(output);
