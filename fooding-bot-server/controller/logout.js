module.exports = {
    post: (req, res) => {
      if (!req.session) {
        res.status(400).send("Not authorized");
      }
      req.session.destory();
      res.status(200).send("logout sucessful");
    },
  };
  