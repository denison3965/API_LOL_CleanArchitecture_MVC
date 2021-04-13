import { Router, Request, Response } from 'express'

const ChampionsController = require('./app/controllers/ChampionsController');

const router = Router();

router.get('/champions', ChampionsController.default)

export {router}