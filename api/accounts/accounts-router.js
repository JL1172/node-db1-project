const router = require('express').Router()
const { checkAccountId, checkAccountPayload, checkAccountNameUnique } = require('./accounts-middleware');
const AccountData = require("./accounts-model");

router.get('/', async(req, res, next) => {
  try { 
    const result = await AccountData.getAll();
    res.status(200).json(result); 
  } catch (err) {next(err)};
})

router.get('/:id', checkAccountId, (req, res) => {
  res.status(200).json(req.account); 
})

router.post('/',checkAccountNameUnique,checkAccountPayload, async(req, res, next) => {
  try {
    const createdAccount = await AccountData.create(req.body);
    res.status(201).json(createdAccount);
  } catch (err) {next(err)}
})

router.put('/:id',checkAccountId, async(req, res, next) => {
  try {
    const updatedAccount = await AccountData.updateById(req.params.id,changes);
    res.status(200).json(updatedAccount);
  } catch (err) {next(err)}
});

router.delete('/:id', checkAccountId, async(req, res, next) => {
  try {
    const deletedAccount = await AccountData.deleteById(req.params.id);
    res.status(200).json(deletedAccount)
  } catch (err) {next(err)}
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message : err.message,
  })
})

module.exports = router;
