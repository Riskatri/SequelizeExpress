'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    _id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    publised_date: DataTypes.DATE,
    pages: DataTypes.INTEGER,
    language: DataTypes.STRING,
    publised_id: DataTypes.STRING,
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};