const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const Task = require("./mongo"); // Import the Task model

// Handle adding a new task
app.post("/tasks", async (req, res) => {
    const { userId, taskName } = req.body;
  
    try {
      const task = new Task({ userId, taskName });
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      console.error("Error saving task:", error);
      res.status(500).json({ error: "Failed to save task" });
    }
  });
  
  // Handle deleting a task
  app.delete("/tasks/:taskId", async (req, res) => {
    const { taskId } = req.params;
  
    try {
      await Task.findByIdAndDelete(taskId);
      res.status(204).end();
    } catch (error) {
      console.error("Error deleting task:", error);
      res.status(500).json({ error: "Failed to delete task" });
    }
  });
  
  // Handle updating a task (toggle checked status)
  app.put("/tasks/:taskId", async (req, res) => {
    const { taskId } = req.params;
  
    try {
      const task = await Task.findById(taskId);
      task.checked = !task.checked;
      await task.save();
      res.status(200).json(task);
    } catch (error) {
      console.error("Error updating task:", error);
      res.status(500).json({ error: "Failed to update task" });
    }
  });


app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})


app.listen(8000,()=>{
    console.log("port connected");
})
