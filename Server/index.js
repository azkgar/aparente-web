const mongoose = require("mongoose");
const app = require("./app");
const PORT_SERVER = process.env.PORT || 5000;
const {API_VERSION, IP_SERVER, PORT_DB} = require("./config");

mongoose.set("useFindAndModify", false);

mongoose.connect(
    `mongodb://${IP_SERVER}:${PORT_DB}/boda`,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err,res) => {
        if (err) {
            throw err;
        } else {
            console.log("La conexión a la base de datos es correcta.");
            app.listen(PORT_SERVER, () => {
                console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
            });
        }
    }
);