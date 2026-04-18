import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import { clerkMiddleware, clerkClient, requireAuth, getAuth } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js";


connectDB();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get("/",(req,res)=>{
     res.send("Hello from server");
});

//Api to listen to clerk webhooks
app.use("/api/clerk", clerkWebhooks);

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
