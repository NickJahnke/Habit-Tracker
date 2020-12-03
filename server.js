const express = require("express")
const cors = require("cors")
const app = express();
const PORT = 8000;
require('dotenv').config();
const cookieParser = require('cookie-parser');





app.use(cookieParser());
app.use(cors(({ credentials: true, origin: 'http://localhost:3000' })));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


require("./config/mongoose")
require("./routes/userRoutes")(app);
require("./routes/habitRoutes")(app);





app.listen(PORT, () => console.log(`app on ${PORT}`));