import User from "../models/user.model.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req,res)=>{
  try {
    //Create a svix instance with clerk secret
     const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)
     //Getting headers
     const headers = {
        "svix-id":request.headers["svix-id"],
        "svix-timestamp":request.headers["svix-timestamp"],
        "svix-signature":request.headers["svix-signature"],

     };
     //Verifying headers
     await whook.verify(JSON.stringify(req.body),headers)
     //Getting data from requst body
     const {data, type} = req.body
     const userData = {
        _id: data.id,
        email: data.email_addresses[0].email_address,
        username: data.first_name + " " + data.last_name,
        image: data.image_url
     } 

     //Switch cases for different Events
     switch(type){
        case "user.created": {
            await User.create(userData);
            break;
        }
         case "user.updated": {
            await User.findByIdAndUpdate(data.id,userData);
              break;
        }
        case "user.deleted": {
            await User.findByIdAndDelete(data.id);
              break;
        }
        default:
            break;

     }

     res.json({success: true, message: "Webhook received"})

  } catch (error) {
    console.log(error.message);
    res.json({success: false, message: error.message});
  }
}

export default clerkWebhooks;

