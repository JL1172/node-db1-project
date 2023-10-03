const yup = require("yup");
const db = require("../../data/db-config");

// const schema = yup.object().shape({
//   name : yup.string().required("")
// })

const checkAccountPayload = async (req, res, next) => {
  try {
      const {budget, name} = req.body;
      console.log(budget,name)
      if (!budget || !name) {
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
    const validateUnqiueness = await db("accounts").where({name : req.body.name.trim()});
    if (validateUnqiueness.length > 0) {
      next({status : 400, message : "that name is taken"})
    } else {
     next();
   }
  } catch(err) {next(err)};
}

const checkAccountId = async (req, res, next) => {
  try {
    const result = await db("accounts").where({ id: req.params.id });
    if (result.length === 0) next({ status: 404, message: `account not found` });
    else {
      req.account = result;
      next();
    }
  } catch (err) { next(err) };
}

module.exports = {
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload

}