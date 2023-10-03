const yup = require("yup");

const schema = yup.object().shape({
  
})

const checkAccountPayload = async(req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
}

const checkAccountNameUnique = async(req, res, next) => {
  // DO YOUR MAGIC
}

const checkAccountId = async(req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
checkAccountId,
checkAccountNameUnique,
checkAccountPayload

}