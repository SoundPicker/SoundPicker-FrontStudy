module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // RetweetId
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 넣으려면 mb4
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser(수정)
    db.Post.hasMany(db.Comment); // post.addComments, post.getComments
    db.Post.hasMany(db.Image); // post.addImages, post.getImages
    db.Post.belongsToMany(db.Hashtag, {
      through: 'PostHashtag',
      as: 'Hashtagging',
    }); // post.addHashtags
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); // 여러 명의 사용자가 좋아요 누를 수 있음 // post.addLikers, post.removeLikers가 생김(belongsToMany라서 복수)
    db.Post.belongsTo(db.Post, { as: 'Retweet' }); // 리트윗은 일대다 관계 // post.addRetweet
  };
  return Post;
};
