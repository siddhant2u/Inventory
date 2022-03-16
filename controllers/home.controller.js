const home = require("../models/home.model");

exports.getMetrics = (req, res) => {
    getMetrics((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "error occured while retrieving metrics"
            });
        }
        res.render('home', {
            title: 'Dashboard',
            data: data,
        });
    });
};


