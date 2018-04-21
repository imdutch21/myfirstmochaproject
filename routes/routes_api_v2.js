const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/info', function (request, response) {
    response.status(200);
    response.json({
        "description": "This server has is a test to use mocha"
    });
});
router.get('/recipes', function (request, response) {
    const recipes = require('../recipes.js');
    const category = request.query.category || '';
    if (category === '') {
        response.status(200);
        response.json(recipes);
    } else {
        let result = [];
        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].category === category) {
                result.push(recipes[i]);
            }
        }
        response.status(200);
        response.json(result);
    }
});

router.get('/recipes/:number', function (request, response) {
    const recipes = require('../recipes.js');
    const number = request.params.number || '';
    if (number < recipes.length && number > -1) {
        response.status(200);
        response.json(recipes[number]);
    } else {
        response.status(400);
        response.json({
            "description": "position does not exist"
        });
    }
});

router.get('*', function (request, response) {
    response.status(404);
    response.json({
        "description": "Does not exist"
    });
});
module.exports = router;
