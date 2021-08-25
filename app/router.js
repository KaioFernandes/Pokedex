const express = require('express');

const router = express.Router();

const mainController = require('./controllers/mainController');

router.use(mainController.initVar);

router.get('/', mainController.homePage);
router.get('/pokemon/:id', mainController.pokemonPage);
router.get('/type', mainController.typePage);
router.get('/type/:id', mainController.pokemonTypePage);
router.get('/region', mainController.regionPage); 
router.get('/region/:id', mainController.pokemonRegionPage);
router.get('/legendaires', mainController.legendairesPage); 
router.get('/legendaires/:id', mainController.pokemonLegendairesPage);

router.use(mainController.notFound);

module.exports = router;