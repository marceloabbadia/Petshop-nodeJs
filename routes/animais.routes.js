import express from "express"
import Animal from "../controllers/animais.controller.js"

const router = express.Router()

router.post("/", Animal.createAnimalsController)
router.get("/", Animal.getAnimaisController)
router.get("/:id", Animal.getAnimalController)
router.delete("/:id", Animal.deleteAnimalController)
router.put("/", Animal.updateAnimalController)

export default router