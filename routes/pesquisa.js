var express = require("express");
var router = express.Router();
var rep = require("../repository");

/* GET users listing. */
router.get("/:id", async function(req, res, next) {
  return res.json(await rep.getPesquisa(req.params.id));
});

router.get("/totalvalor/:id", async function(req, res, next) {
  return res.json(await rep.getValorTotal(req.params.id));
});

router.post("/:id", (req, res) => {
  console.log(req.body.valor);
  rep.insertDoacao(req.params.id, req.body.valor);
  res.send(200);
});

module.exports = router;
