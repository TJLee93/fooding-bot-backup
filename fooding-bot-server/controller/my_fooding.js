const { fooding, score } = require('../models');

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
                                id: data.id,
                                my_fooding: [
                                    {
                                        score: ,
                                        recommend_id: ,
                                        food_img: ,
                                        created_at: 
                                    },
                                    {
                                        score: ,
                                        recommend_id: ,
                                        food_img: ,
                                        created_at: 
                                    }
                                ]
                            }
                        })
                            .catch(err => {
                                res.status(500).send(`Sorry can't process your request`);
                            });
                    }
                })
        }
    },

    post: async (req, res) => {
        let target = await 
    }
};

// fooding.destroy({
//     where: {
//         recommend_id: req.body.recommend_id,
//         user_id: req.body.user_id
//     }
//     res.status(200).send('Deleted successful')
//     .catch(err => {
//         res.status(500).send(`Sorry can't process your request`);
//     });

// res.status(200).json({
//     data: {
//         id: 1,
//         my_fooding: [
//             {
//                 score: 3,
//                 recommend_id: 21,
//                 food_img: '/img/짜장면.jpg',
//                 created_at: '2021-03-17'
//             },
//             {
//                 score: 5,
//                 recommend_id: 5,
//                 food_img: '/img/해장국.jpg',
//                 created_at: '2021-03-17'
//             }
//         ]
//     }
// })