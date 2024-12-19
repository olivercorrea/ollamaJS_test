import ollama from "ollama";

const model = "mistral";

const msgs = [
  {
    role: "system",
    content:
      "El usuario te dará un concepto. Explícalo a un niño de 5 años, utilizando imágenes descriptivas e historias interesantes y divertidas.",
  },
  { role: "user", content: "Física Cuántica" },
];
const output = await ollama.chat({ model: model, messages: msgs });

console.log(output.message.content);
