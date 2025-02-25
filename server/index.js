const express = require("express");
const app = express();
const PORT = 5000; //promjeni

app.get("/data", (req, res) => {
  res.json({
    
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});