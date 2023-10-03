const db = require("../../data/db-config");

const getAll = async() => {
  // DO YOUR MAGIC
  const res = await db("accounts");
  return res;
}

const getById = async(id) => {
  // DO YOUR MAGIC
}


const create = async(account) => {
  // DO YOUR MAGIC
}

const updateById = async(id, account) => {
  // DO YOUR MAGIC
}

const deleteById = async(id) => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
