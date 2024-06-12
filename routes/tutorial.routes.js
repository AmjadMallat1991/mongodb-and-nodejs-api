module.exports = app=>{

    const tutorials = require('../controllers/tutorial.controller.js')

    var router = require('express').Router();
    router.post('/',tutorials.create);
    router.get("/all",tutorials.findAll);
    router.put("/:id", tutorials.update);
    app.use('/api',router)
}