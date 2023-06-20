module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, 
  {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  },
  );

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    })

    Category.belongsToMany(BlogPost, {
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    })
  }
  
  return PostCategory;
}