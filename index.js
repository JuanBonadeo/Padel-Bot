import express from "express"
import { task } from "./scarpeLogic.js";
const app = express()
const PORT = process.env.PORT || 4000

app.get("/scrape", (req, res) => {
      task(res);
    });
app.get("/", (req,res) => {
      console.log("Render Puppeter server is up running")
})
app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`)
})

      
