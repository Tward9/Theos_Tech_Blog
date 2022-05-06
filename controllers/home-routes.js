const router = require('express').Router();
const { BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');

//get all blog posts for homepage
router.get('/', async (req, res) => {
    try {
        const dbBlogPostData = await BlogPost.findAll({});

        const blogPosts = dbBlogPostData.map((blogPost) =>
            blogPost.get({ plain: true })
        );

        res.render('homepage', {
            blogPosts,
            // logged_In: req.session.logged_In,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// router.get('/blogPost/:id', async (req, res) => {
//     try {
//         const dbBlogPostData = await BlogPost.findByPk(req.params.id);

//         const blogpost = dbBlogPostData.get({ plain: true });

//         res.render('blogPost', { blogpost });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

router.get('/blogPost/:id', async (req, res) => {
    try {
      const dbBlogPostData = await BlogPost.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
            attributes: [
              'id',
              'description',
              'user_id',
              'blogPost_id',
            ],
          },
        ],
      });
  
      const post = dbBlogPostData.get({ plain: true });
      
      res.render('blogPost', {
        post,
        loggedIn: req.session.logged_in,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
