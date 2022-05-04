const sequelize = require('../config/connection');
const seedBlogPosts = require('./blogPostData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogPosts();

  process.exit(0);
};

seedAll();
