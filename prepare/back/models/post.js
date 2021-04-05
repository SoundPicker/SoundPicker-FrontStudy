module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'post',
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
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Hashtag);
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); // 여러 명의 사용자가 좋아요 누를 수 있음
    db.Post.belongsTo(db.Post, { as: 'Retweet' }); // 리트윗은 일대다 관계
  };
  return Post;
};
