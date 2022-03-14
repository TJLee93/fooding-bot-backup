// module.exports = async (req, res) => {
//     // jwt를 사용하여 저장된 유저정보를 바로 불러올 수 있는지 체크
//     // aws cognito를 사용하면 jwt랑 aws 연결가능
//     // 좀 더 알아보고 구현 가능한지 체크
//     res.status(200).send('Scored successful')
//         .catch(err => {
//             res.status(500).send(`Sorry can't process your request`);
//         });
// };

const { user, fooding } = require('../models');

module.exports = {
    post: (req, res) => {
        const sess = req.session;
        const { my_score, user_id } = req.body;

        if (sess.userId) {
            user.findOnd({
                where: {
                    id: sess.userId
                }
            })
                .then(data => {
                    if (data) {
                        // create를 사용해서 점수 주는거에 대한 정보를 생성해줘야 할 것 같다.
                        fooding.create({
                            user_id: `${user_id}`,
                            my_score: `${my_score}`
                        })
                        res.status(200).send('Scored successful');
                    }
                })
                .catch(err => {
                    res.status(500).send(`Sorry can't process your request`);
                });
        }
    }
}