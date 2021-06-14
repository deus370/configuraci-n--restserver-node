const { Router } = require("express");
const { get, put, post, delet } = require("../controllers/user");

const router = Router();


router.get("/", get);

router.put("/:id", put);

router.post("/", post);

router.delete("/", delet);

module.exports = router;
