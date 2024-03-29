module.exports = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'blog_posts',
    underscored: true,
    timestamps: false,
  })

  BlogPostTable.associate = ({ User }) => {
    BlogPostTable.belongsTo(User, 
      { foreignKey: 'id', as: 'user' })
  }

  return BlogPostTable;
};