const { find } = require('lodash');

const articles = [
    {
      id: 1,
     title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      tagIds: [50],
      sectionId: 6,
    },
    {
     id : 2,
      title: 'Jurassic Park',
      author: 'Michael Crichton',
      sectionId: 1,
      tagIds: [10, 20, 40]
    },
  ];



  module.exports = {
    findAll : ()=> articles, 
    find : (id)=>  find(articles, {id: id})
  }