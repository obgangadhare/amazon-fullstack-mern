const express = require('express');
const router = express.Router();
const bestselcontroller = require('../Controllers/bestsel');
const mobilescontroller = require('../Controllers/mobiles');
const shirtscontroller = require('../Controllers/shirts');
const usercontroller = require('../Controllers/user');


router.get('/shirts', shirtscontroller.getAllShirts);
router.get('/shirts/:type', shirtscontroller.shirtsByType);
router.get('/electronics', bestselcontroller.getAllElectronics);
router.get('/electronics/:type', bestselcontroller.electronicsByType);
router.get('/mobiles', mobilescontroller.getAllMobiles);
router.get('/mobiles/:type', mobilescontroller.mobileByType);
router.post('/signup',usercontroller.signup);
router.post('/login',usercontroller.login);


module.exports = router;
