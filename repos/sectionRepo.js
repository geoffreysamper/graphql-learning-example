const { find } = require('lodash');
const sections = [
    { id: 6, name: "boeken" },
    { id: 1, name: "films" }
  
  ]


  module.exports = {
    findAll : ()=> sections, 
    find : (id)=>  find(sections, {id: id})
  }
