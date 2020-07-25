import express from "express"
import {crearPagina} from "../controllers/pageController";


const router = express.Router()


router.post('/', crearPagina)

export default router