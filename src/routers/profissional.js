
const router = require('express').Router();

const { create, update, search, findOne, deleteOne } = require("../controllers/profissional");


router.get("/", search);

router.get("/:id", findOne);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", deleteOne);

module.exports = router;