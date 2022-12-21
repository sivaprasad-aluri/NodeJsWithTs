const express = require("express");

const app = express();
const port = 1100;

// Routes:

// GET
app.get("/", (req: any, res: any) => {
  res.send("Hello World..!");
});

//POST
app.post("/", (req: any, res: any) => {
  res.send("Got a POST request");
});

//PUT
app.put("/user", (req: any, res: any) => {
  res.send("Got a PUT request");
});

//DELETE
app.delete("/user", (req: any, res: any) => {
  res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
  console.log("app running at ", port);
});
