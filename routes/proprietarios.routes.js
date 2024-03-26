import express from "express"
import Proprietario from "../controllers/proprietarios.controller.js"

const router = express.Router()

router.post("/", Proprietario.createProprietariosController)
router.get("/", Proprietario.getProprietariosController)
router.get("/:id", Proprietario.getProprietarioController)
router.delete("/:id", Proprietario.deleteProprietarioController)
router.put("/", Proprietario.updateProprietarioController)

export default router