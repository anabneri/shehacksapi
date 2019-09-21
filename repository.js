const sql = require("mssql");

const getPesquisa = async id => {
  await sql.connect(
    "mssql://anabneri:AnaBeatriz--101020@shehacks.database.windows.net:1433/shehacks?encrypt=true"
  );
  const result = await sql.query`select * from PESQUISA where ID_PESQUISA = ${id}`;
  sql.close();
  return result.recordset[0];
};
const getValorTotal = async id => {
  await sql.connect(
    "mssql://anabneri:AnaBeatriz--101020@shehacks.database.windows.net:1433/shehacks?encrypt=true"
  );
  const result = await sql.query`select sum(valor) as total from DOACOES where ID_PESQUISA = ${id}`;
  sql.close();
  return result.recordset[0];
};
const insertDoacao = async (id, valor) => {
  await sql.connect(
    "mssql://anabneri:AnaBeatriz--101020@shehacks.database.windows.net:1433/shehacks?encrypt=true"
  );
  const result = await sql.query`insert into DOACOES (ID_PESQUISA, VALOR) values (${id}, ${valor})`;
  sql.close();
};
module.exports = {
  getPesquisa,
  getValorTotal,
  insertDoacao
};
