import ollama from "ollama";

const prompt = "what is AI?";
const output = await ollama.generate({
  model: "mistral",
  prompt: prompt,
  stream: true,
});

for await (const part of output) {
  //   console.log(part);
  process.stdout.write(part.response);
  if (part.done === true) {
    console.log(
      `\nstats: ${(part.eval_count / (part.eval_duration / 1000000000)).toFixed(
        2
      )} tokens per second`
    );
  }
}

// console.log(output);
