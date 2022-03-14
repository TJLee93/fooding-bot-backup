const { recommend } = require('../models');
const { foods } = require('../data/data.json');

module.exports = {
    get: async (req, res) => {
        let foodInfo = await recommend.findAll({
            where: {
                restaurant: req.body.restaurant
            }
        });

        const foodScore = foods.filter(food => food.restaurant === foodInfo.restaurant);

        let len = foodScore.length;
        let sum = 0;

        for (el of foodScore) {
            sum = sum + el.score;
        }

        let avg = sum / len;

        // let scores = [...foodInfo.score];
        // let len = scores.length;
        // let sum = 0;

        // for (el of scores) {
        //     sum = sum + el;
        // }

        // let avg = sum / len;

        res.status(200).json({
            restaurant: req.body.restaurant,
            food_img: req.body.food_img,
            avg_score: avg
        })
            .catch(err => {
                res.status(500).send(`Sorry can't process your request`);
            });
    }
};
