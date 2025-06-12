'use server'

// Import the mongoose library
import mongoose from "mongoose"

// Define the MongoDB connection string
const DATABASE_URL = process.env.DATABASE_URL || ''

if (!DATABASE_URL) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

// Define a global variable to cache the connection
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connection() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(DATABASE_URL, opts).then((mongoose) => {
      return mongoose
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

async function connectDB() {
  await connection()
    .then(() => {
        console.log('Conexão estabelecida com o banco!')
    })
    .catch(err => {
        console.log('Erro ao conectar com o banco.')
        console.log(err)
    })
}

export default connectDB;