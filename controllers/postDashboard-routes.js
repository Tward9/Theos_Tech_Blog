const router = require('express').Router();
const { BlogPost } = require('../models');
const withAuth = require('../utils/auth');

//get all blog posts for homepage
router.get('/', async (req, res) => {
    try {
        const dbBlogPostData = await BlogPost.findAll({});

        const blogPosts = dbBlogPostData.map((blogPost) =>
            blogPost.get({ plain: true })
        );

        res.render('dashboard', {
            blogPosts,
            // logged_In: req.session.logged_In,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
router.post('/', async (req, res) => {
    try {
        const newBlogPost = await BlogPost.create({
            title: req.body.title,
            description: req.body.description,
            user_id: req.session.user_id,
        });
        res.status(200).json(newBlogPost)
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const dbBlogPostData = await BlogPost.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!dbBlogPostData) {
            res.status(404).json({ message: 'No Post found with this id!' });
            return;
        };
        res.status(200).json(dbBlogPostData);
    } catch (err) {
        res.status(500).json(err);
    };
});
module.exports = router;
