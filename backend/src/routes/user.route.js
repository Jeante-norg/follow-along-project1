const express = require('express');
const { CreateUSer } = require('../controllers/user.controller');
const upload = require('../middlewares/multer');

const router = express.Router();

router.get('/create-user', upload.single('file'), CreateUSer);

export default router;

