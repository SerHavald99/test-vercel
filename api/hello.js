module.exports = (req, res) => {
  res.status(200).json({
    message: "Hallo von der Serverless Function!",
    time: new Date().toISOString(),
  });
};
