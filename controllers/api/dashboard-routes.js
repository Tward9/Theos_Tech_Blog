const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const dbBlogPostData = await BlogPost.findAll();
        res.status(200).json(dbBlogPostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newBlogPost = await BlogPost.create({
            title: req.body.title,
            description: req.body.description,
            // user_id: req.session.user_id,
        });
        res.status(200).json(newBlogPost)
    } catch (err) {
        res.status(400).json(err);
    }
});
module.exports = router;