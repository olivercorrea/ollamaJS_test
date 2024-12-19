import ollama from "ollama";

const prompt = "what is AI?";

const output = await ollama.generate({
  model: "mistral",
  prompt: prompt,
  stream: true,
});
const context = [];

for await (const part of output) {
  if (part.done === true) {
    console.log(`first generate complete`);
    context.push(...part.context);
  }
}

const output2 = await ollama.generate({
  model: "mistral",
  prompt: "can it be another?",
  context: context,
});
console.log(`output with context\n\n${output2.response}\n\noutput complete\n`);
