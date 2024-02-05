import { MongoClient } from "mongodb";

const uri: string = 'mongodb+srv://Aessandria:cgkDicoJBV4f9uVW@cluster0.l79jczi.mongodb.net/sample_mflix?retryWrites=true&w=majority';
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
    let globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;