const { recommend, user, fooding } = require('../models');
const { foods } = require('../data/data.json');

module.exports = {
    get: async (req, res) => {
        const sess = req.session;

        if (sess.userId) {
            user.findOne({
                where: {
                    id: sess.userId
                }
            })
                .then(data => {
                    if (data) {
                        res.status(200).json({
                            data: {
                                user_name: data.user_name,
                                nick_name: data.nick_name,
                                address: data.address,
                                payment: data.payment
                            }
                        })
                    }
                })
                .catch(err => {
                    res.status(500).send(`Sorry can't process your request`);
                });
        }
    },

    post: async (req, res) => {
        let foodOption = await recommend.findOne({
            where: {
                food_member: req.body.food_member,
                food_type: req.body.food_type
            }
        });

        let payment = await user.findOne({
            where: {
                payment: req.body.payment
            }
        });

        let foodInfo = await fooding.findOne({
            where: {
                recommend_id: req.body.recommend_id,
            }
        });

        let restaurantInfo = await recommend.findAll({
            where: {
                restaurant: foodOption.restaurant
            }
        });

        let foodScore = foods.filter(food => food.restaurant === restaurantInfo.restaurant);

        let len = foodScore.length;
        let sum = 0;

        for (el of foodScore) {
            sum = sum + el.score;
        }

        let avg = sum / len;

        let Options = { ...foodOption.dataValues, ...payment.dataValues, ...foodInfo.dataValues };

        res.status(200).json({
            data: {
                recommend_id: Options.recommend_id,
                restaurant: Options.restaurant,
                food_name: Options.food_name,
                food_img: Options.food_img,
                food_price: Options.food_price,
                restaurant_address: Options.restaurant_address,
                avg_score: avg
            },
        })
            .catch(err => {
                res.status(500).send(`Sorry can't process your request`);
            });
    }
};