const { ApolloServer, gql } = require('apollo-server');
const { find } = require('lodash');
const articleRepo = require('./repos/articleRepo')
const sectionRepo = require('./repos/sectionRepo')
const tagRepo = require("./repos/tagRepo")

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
    # Comments in GraphQL are defined with the hash (#) symbol.
    type Article {
      title: String!
      author: String!
      section: Section!
      tags : [Tag]
    }
    
    type Section {
      id : ID!
      name: String!
    } 

    type Tag 
    {
      id : ID!
      name: String!
    }

    type Query {
      articles: [Article]
    }
  `;


const resolvers = {
  Query: {
    articles: () => articleRepo.findAll(),
  },

  Article: {
  /*  section: (parent, args, context, info) => {
      console.info("Article.section  ", parent.sectionId)
      return context.sections.find(parent.sectionId)
    },
*/
    tags: (parent, args, context, info) => {
      console.info("Article.tag  ", parent.tagIds.join(','))
      return context.tags.findMany(parent.tagIds)
    }
  }
};


var serverOptions = {
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    articles: articleRepo,
    sections: sectionRepo,
    tags: tagRepo
  })
}

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer(serverOptions);

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
