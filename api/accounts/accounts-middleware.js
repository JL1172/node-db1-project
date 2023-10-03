const yup = require("yup");// eslint-disable-line
const db = require("../../data/db-config");

// const schema = yup.object().shape({
//   name : yup.string().required("")
// })

const checkAccountPayload = async (req, res, next) => {
  try {
      const valsDet = Object.values(req.body);
      const {name,budget} = req.body;
      if (valsDet.length !== 2) {
        next({status : 400, message : "name and budget are required"}) 
      } else if (name.trim().length < 3 || name.trim().length > 100) {
        next({status : 400, message : "name of account must be between 3 and 100"})
      } else if (!Number(budget)) {
        next({status : 400, message : "budget of account must be a number"})
      } else if (budget < 0 || budget > 1000000) {
        next({status : 400, message : "budget of account is too large or too small"})
      } else {
        next(); 
      }
  } catch (err) { next(err) }
}

const checkAccountNameUnique = async (req, res, next) => {
  try {
    const {name} = req.body;
    const newName = name.trim();
    const validateUnqiueness = await db("accounts").where({name :newName});
    if (validateUnqiueness.length > 0) {
      next({status : 400, message : "that name is taken"})
    } else {
     next();
   }
  } catch(err) {next(err)}
}

const checkAccountId = async (req, res, next) => {
  try {
    const result = await db("accounts").where({ id: req.params.id });
    if (result.length === 0){ 
      next({ status: 404, message: `account not found` });
    }
    else {
      req.account = result[0];
      next();
    }
  } catch (err) { next(err) }
}

module.exports = {
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload

}