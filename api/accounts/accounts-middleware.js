const yup = require("yup");
const db = require("../../data/db-config");

// const schema = yup.object().shape({
//   name : yup.string().required("")
// })

const checkAccountPayload = async (req, res, next) => {
  try {
    if (!req.body.budget.trim() || !req.body.name.trim()){ 
      next({ status: 400, message: "name and budget are required" });}

    if (!req.body.name.trim().length < 3 || !req.body.name.trim().length > 100 ) {
      next({status : 422, message : "name of account must be between 3 and 100"});}
    
    if (Number(req.body.budget) === NaN) {
      next({status : 422, message : "budget of account must be a number"})}

    if (req.body.budget < 0 || req.body.budget > 1000000) {
      next({status : 422, message  :"budget of account is too larget or too small"})};
    
    next(); 
  } catch (err) { next(err) }
}

const checkAccountNameUnique = async (req, res, next) => {
  try {
    const validateUnqiueness = await db("accounts").where({name : req.body.name.trim()});
    if (validateUnqiueness.length > 0) next({status : 400, message : "that name is taken"})
    next();
  } catch(err) {next(err)};
}

const checkAccountId = async (req, res, next) => {
  try {
    const result = await db("accounts").where({ id: req.params.id });
    if (result.length === 0) next({ status: 404, message: `ID: ${req.params.id} not found` });
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