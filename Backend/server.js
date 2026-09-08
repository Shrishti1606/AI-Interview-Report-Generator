require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/database')
// const { resume, selfDescription, jobDescription } = require("./src/services/temp")
// const generateInterviewReport = require("./src/services/ai.service");  

// generateInterviewReport({ resume, selfDescription, jobDescription })
const PORT = process.env.PORT || 3000;

connectDB()
.then(() => {
    console.log("DB connected")
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error("DB connection failed:", err)
    process.exit(1)
})

