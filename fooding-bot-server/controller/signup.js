const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const { name, email, password, address, payment } = req.body;

    if (!email || !password || !name || !address || !payment) {
      return res.status(422).send("Did not meet the conditions");
    }
    const newUser = await User.findOrCreate({
      where: {
        email: email,
      },
      defaults: {
        password: password,
        username: name,
        address: address,
        payment: payment,
      },
    });
    // console.log("여기");
    // console.log(newUser);
    if (newUser[1] === false) {
      return res.status(409).send("Email already exists");
    } else {
      res.status(201).send({
        id: newUser.id,
        user_name: newUser.user_name,
        email: newUser.email,
        address: newUser.address,
        payment: newUser.payment,
      });
    }
  },
};
