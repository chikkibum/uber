const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const app = express()


app.use(cors())

app.get("/",(req,res) =>{
    res.send("hello")
})

const PORT = process.env.PORT || 4000; // Default to 3000 if undefined
console.log(`PORT from .env: ${PORT}`);
  
console.log(PORT)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports=app;