var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/:id", function(req, res, next) {
  console.log(req.params.id);
  return res.json({
    pesquisaId: req.params.id,
    video: "https://www.youtube.com/watch?v=ujPUEGJMrrI",
    imagem: "https://via.placeholder.com/500x500",
    simplificada: {
      titulo: "Pesquisa 1",
      resumo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    academica: {
      titulo: "Pesquisa Academico 1",
      resumo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  });
});

router.post("/:id", (req, res) => {
  console.log(req.body.valor);
  res.send(200);
});

module.exports = router;
