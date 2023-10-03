const db = require("../../data/db-config");

const getAll = async() => {
  // DO YOUR MAGIC
  const res = await db("accounts");
  return res;
}

const getById = async(id) => {
  const resById = await db("accounts").where({id : id}).first();
  return resById; 
}


const create = async(account) => {
  const {name} = account;
  const newName = name.trim();
  const copied = {name : newName, budget : Number(account.budget)}
  const created = await db("accounts").insert(copied);
  // const returnCreated = await db("accounts").where(created);
  return copied;
}

const updateById = async(id, account) => {
  const updated = await db("accounts").update(account).where({id : id});
  const returnUpdated = await db("accounts").where({id : id}).first();
  return returnUpdated;
}

const deleteById = async(id) => {
  const deleted = await db("accounts").del().where({id : id});
  const returnDeleted = await db("accounts");
  return deleted;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
