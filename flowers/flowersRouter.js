const router = require('express').Router();

const Flowers = require('./flowersHelper.js');

// /flowers  
    // w/out middleware
router.get('/', (req, res) => {
    Flowers.find()
        .then(allflowers => {
            res.json(allflowers);
        })
        .catch(error => {
            console.log(error);
            res.status(401).json({
                message: ' You shall not see the flowers. 🙅‍♀️'
            })
        });
});

module.exports = router; 