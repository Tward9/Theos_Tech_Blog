const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            description: req.body.commentDescription,
            user_id: req.session.user_id,
            blog_post_id: req.body.blog_post_id,
        });
        res.status(200).json(newComment)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;