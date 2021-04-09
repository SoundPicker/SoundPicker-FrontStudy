module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      // MySQL에는 users 테이블 생성
      // id가 기본적으로 들어있다.
      email: {
        type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
        allowNull: false, // 필수
        unique: true, // 고유한 값
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false, // 필수
      },
      password: {
        type: DataTypes.STRING(100), // 비밀번호는 암호화를 하기 때문에 넉넉하게
        allowNull: false, // 필수
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글 저장
    }
  );
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' }); // 한 사람이 여러 개의 게시글에 좋아요 누를 수 있음
    db.User.belongsToMany(db.User, {
      through: 'Follow',
      foreignKey: 'FollowingId',
      as: 'Followings',
    });
    db.User.belongsToMany(db.User, {
      through: 'Follow',
      foreignKey: 'FollowerId',
      as: 'Followers',
    });
  };
  return User;
};
