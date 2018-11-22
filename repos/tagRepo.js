const { find } = require('lodash');

const tags = [
    { id: 50, name: "Harry Potter movie collection" },
    { id: 20, name: "Spielberg" },
    { id: 40, name: "dino's" },
    { id: 10, name: "3D" },
  
  ]


  function findMany (tagIds){
    var result = [];

    for (var tagId of tagIds) {
      var item = find(tags, { id: tagId })
      if (item) {
        result.push(item);
      }
    }
  
  
    return result;
  

  }
  
  module.exports = {findMany}