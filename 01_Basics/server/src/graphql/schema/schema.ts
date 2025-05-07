export const graphQLSchema = `#graphql

type User {
    _id : String!
    name : String!
    email : String!
    password : String!
    googleId : String!
    avatar : String!
    role : String!
    varified : Boolean!
    createdAt : String!
    updatedAt : String!
}

type Query {
    hello: String
    name : String
    user : [User]
}

type Mutation {
    addPost(title: String!, content: String!): Post
}

type Post {
    title: String
    content: String
}
`;
