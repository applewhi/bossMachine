const checkMillionDollarIdea = (req, res, next) => {
  if (!req.numWeeks || !req.weeklyRevenue || Number(req.numWeeks) *
  Number(req.weeklyRevenue) < 1000000) {
    res.status(400).send();
  } else {
    next();
  }
}

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
