const { BlogPost } = require('../models');

const blogPostData = [
  {
    title: 'Blossoming Apricot',
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: 'new post 1',
    description:
      'new blog post',
  },
  {
    title: 'new post 2',
    description:
      'another new blog post',
  },
  {
    title: 'new post 3',
    description:
      'also another new blog post',
  },

];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;
