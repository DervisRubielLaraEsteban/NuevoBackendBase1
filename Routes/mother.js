const {Router} = require("express")
const {getPersonajes, getPersonajesByID, deletePersonajeByID, addPersonajes,updateUserByPersonajes } = require("../controllers/mother")
const router = Router()

//http://localhost:4000/api/v1/mother

//GET
router.get("/", getPersonajes)
router.get("/id/:id", getPersonajesByID)

//DELETE
router.delete("/",deletePersonajeByID)

//POST
router.post("/",addPersonajes)

//PUT
router.put("/",updateUserByPersonajes)


module.exports = router