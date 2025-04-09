import { MongoClient, ServerApiVersion, Db, Collection, Document } from 'mongodb';

export default function dbConnect<T extends Document>(collectionName: string): Collection<T> {
    // Validate environment variables
    const uri = process.env.MONGO_URI;
    const dbName = process.env.DB_NAME;
    
    if (!uri) {
        throw new Error('MONGO_URI environment variable is not defined');
    }
    
    if (!dbName) {
        throw new Error('DB_NAME environment variable is not defined');
    }

    // Create MongoClient with TypeScript types
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    // Connect and get database instance
    const db: Db = client.db(dbName);
    return db.collection<T>(collectionName);
}