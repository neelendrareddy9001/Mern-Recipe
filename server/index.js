import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js';
import { recipeRouter } from './routes/recipes.js';

//To generate a version of our API
const app = express();

//It is Always convert data into json which is come from the FrotEnd with every sigle request we made from FrontEnd
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipeRouter);


//MondoDb connection
mongoose.connect(
    "mongodb+srv://neelendrareddy123:Neele1234@omitstoreecommerce.mtojvcm.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }
).then(() => {console.log("db Connected")})


app.listen(3001, () => {
    console.log("Server Started");
})
