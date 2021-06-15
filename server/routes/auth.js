import express from 'express';

const router = express.Router();

import { register } from '../controllers/auth';

router.get('/:message');
router.post('/register', register);

module.exports = router;
