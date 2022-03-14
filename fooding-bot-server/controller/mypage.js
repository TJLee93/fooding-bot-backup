const { user } = require("../models");

module.exports = {
  get: async (req, res) => {
    // your code here

    // your code here
    // TODO: 데이터베이스에서 로그인한 사용자의 정보를 조회한 후 응답합니다.
    const result = await User.findOne({
      where: { userId: req.session.email },
    });
    res.status(200).send({
      id: result.id,
      user_name: result.user_name,
      profile_path: result.profile_path,
      address: result.address,
      payment: result.payment,
    });
  },
};
