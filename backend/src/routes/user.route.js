const express = require('express');
const CreateUSer  = require('../controllers/user.controller.js');
const upload = require('../middlewares/multer.js');

const router = express.Router();

router.post('/create-user', upload.single('file'), CreateUSer);

export default router;

