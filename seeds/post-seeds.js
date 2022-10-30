const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text: 'Post Text goes here',
    user_id: 3
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Post Text goes here',
    user_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'Post Text goes here',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
