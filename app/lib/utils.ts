import mongoose from "mongoose";

interface IConnection {
    isConnected?: number;
}

export const connectToDB = async () => {
    const connection: IConnection = {};

    try {
        if (connection.isConnected) return;  
        const db = await mongoose.connect(process.env.MONGO || "");
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};
