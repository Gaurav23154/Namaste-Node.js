const url="mongodb+srv://namastedev:y8Ttwr556i0S31KN@namastenode.w3ufviz.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNode";

const mongoose = require("mongoose");

const connectDB= async() =>{
    await mongoose.connect(url);
}

connectDB().then(()=>{
    console.log("Database connection established");
})
.catch((err)=>{
    console.log("Database cannot be connected")
});