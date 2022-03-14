const { User } = require("../../models");

module.exports = {
  get: async (req, res) => {
    const result = await User.findOne({
      where: { userId: req.session.user },
    });
    res.status(200).send({
      id: result.id,
      user_name: result.user_name,
      nick_name: result.nick_name,
      profile_path: result.profile_path,
      address: result.address,
      payment: result.payment,
    });
  },
  post: async (req, res) => {
    const result = await Users.findOne({
      where: { userId: req.session.user },
    });

    res.status(200).send({
      id: result.id,
      user_name: result.user_name,
      nick_name: result.nick_name,
      profile_path: result.profile_path,
      address: result.address,
      payment: result.payment,
    });
  },
};
