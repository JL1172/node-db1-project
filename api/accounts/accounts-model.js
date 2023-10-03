const db = require("../../data/db-config");

const getAll = async() => {
  // DO YOUR MAGIC
  const res = await db("accounts");
  return res;
}

const getById = async(id) => {
  const resById = await db("accounts").where({id : id});
  return resById; 
}


const create = async(account) => {
  const created = await db("accounts").insert(account);
  const returnCreated = await db("accounts").where(created).first();
  return created;
}

const updateById = async(id, account) => {
  const updated = await db("accounts").update(account).where({id : id});
  const returnUpdated = await db("accounts").where({id : id});
  return updated;
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
