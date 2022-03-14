module.exports = {
  post: async (req, res) => {
    if (!req.passwword) {
      res
        .status(400)
        .send("Please write your password according to the conditions");
    } else {
      res.status(200).send("Change password successful");
    }
  },
};
