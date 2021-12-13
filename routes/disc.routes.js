const Router = require('express');
const router = new Router();
const authMiddleware = require('../middleware/auth.middleware');
const discController = require('../controllers/discController');

router.post('', authMiddleware, discController.createDir);
router.post('/upload', authMiddleware, discController.uploadFile);
router.post('/rename', authMiddleware, discController.renameFile);
router.post('/avatar', authMiddleware, discController.uploadAvatar);
router.get('', authMiddleware, discController.getFiles);
router.get('/download', authMiddleware, discController.downloadFile);
router.get('/search', authMiddleware, discController.searchFile);
router.delete('/', authMiddleware, discController.deleteFile);
router.delete('/avatar', authMiddleware, discController.deleteAvatar);

module.exports = router;
