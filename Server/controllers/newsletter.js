const Newsletter = require("../models/newsletter");

function suscribeEmail(req,res) {
    const email = req.params.email;
    const newsletter = new Newsletter();

    if(!email) {
        res.status(404).send({message: "El email es obligatorio", code: 404});
    } else {
        newsletter.email = email.toLowerCase();
        newsletter.save((err, neswletterStore) => {
            if(err) {
                res.status(500).send({code: 500, message: "El email ya está registrado"});
            } else {
                if(!neswletterStore) {
                    res.status(404).send({code: 400, message: "Error al registrar correo"});
                } else {
                    res.status(200).send({code: 200, message: "email registrado correctamente"});
                }
            }
        });
    }
}

module.exports = {
    suscribeEmail
}