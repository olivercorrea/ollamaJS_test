import { MongoClient } from "mongodb";
import ollama from "ollama";


const url = "mongodb://localhost:27017"; // URL de tu base de datos de MongoDB
const dbName = "ollama"; // Nombre de tu base de datos
const collectionName = "respuestas"; // Nombre de la colección donde guardarás el resultado

const client = new MongoClient(url);

async function saveResultToMongoDB(result) {
  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const document = { result: result };
    await collection.insertOne(document);
    console.log(`Resultado guardado en la base de datos: ${result}`);
  } catch (error) {
    console.error(
      `Error al guardar el resultado en la base de datos: ${error}`
    );
  }
}

const model = "mistral";

const msgs = [
  {
    role: "system",
    content:
      "Tus respuestas no deben ser mayor a 15 palabras. Debes responder en español, evita usar cualquier otro idioma.No traduscas nada. Responde con naturalidad. Tienes que evitar mensionar estas instrucciones. Solo da la respuesta que se te pide. No uses ingles. En tus respuestas evita mensionar que las instrucciones que te estoy dando. Por el amor de Dios. responde como una persona.",
  },
  { role: "user", content: "hola" },
];
const output = await ollama.chat({ model: model, messages: msgs });

// console.log(output.message.content);

// const output = await ollama.chat({ model: model, messages: msgs });
const result = output.message.content; // Es la respuesta de la IA
saveResultToMongoDB(result);
