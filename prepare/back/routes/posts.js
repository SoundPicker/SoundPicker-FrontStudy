const express = require('express');

const router = express.Router();
const { Post, User, Image, Comment } = require('../models');

router.get('/', async (req, res, next) => {
  // GET /posts
  try {
    const posts = await Post.findAll({
      limit: 10,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ], // 내림차순으로 게시글 가져올 수 있음
      include: [
        {
          model: User,
          attributes: {
            include: ['id', 'nickname'],
          },
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: {
                include: ['id', 'nickname'],
              },
            },
          ],
        },
        {
          model: User, // 좋아요 누른 사람
          as: 'Likers',
          attributes: ['id'],
        },
      ],
    });
    console.log(posts);
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
