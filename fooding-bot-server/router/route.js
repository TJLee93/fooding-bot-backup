const express = require('express');
const router = express.Router();

const controller = require('../controller');

router.post('/login', controller.login);
router.post('/logout', controller.logout);
router.post('/signup', controller.signup);
router.get('/mypage', controller.mypage);
router.get('/profile', controller.profile);
router.post('/profile', controller.profile);
router.post('/password', controller.password);
router.get('/main', controller.main);
router.post('/main', controller.main);
router.get('/other_fooding', controller.other_fooding);
router.post('/fooding_score', controller.fooding_score);
router.get('/my_fooding', controller.my_fooding);
router.post("/my_fooding", controller.my_fooding);

module.exports = router;