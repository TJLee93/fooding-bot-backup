const { user } = require("../models");

module.exports = {
  post: async (req, res) => {
    const userInfo = await user.findOne({
      where: { email: req.body.email, password: req.body.password },
    });

    if (!userInfo) {
      res.status(401).send("Invalid user or Wrong password");
    } else {
      req.session.userId = userInfo.id;

      res.status(200).send({
        id: userInfo.id,
        user_name: userInfo.user_name,
        nick_name: userInfo.nick_name,
        email: userInfo.email,
        address: userInfo.address,
        payment: userInfo.payment,
        profile_path: userInfo.profile_path,
      });
    }
  },
};
