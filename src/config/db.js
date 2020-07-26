import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({
    path: 'db.env',
});

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            //EXTRAS
            autoIndex: true,
            //reconnectTries: Number.MAX_VALUE,
            //reconnectInterval: 500,
            poolSize: 50,
            bufferMaxEntries: 0,
            keepAlive: 120,
        });
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

export default conectarDB;
