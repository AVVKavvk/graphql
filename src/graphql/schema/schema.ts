export const graphQlSchema = `#graphql

    type User {
        _id: ID!
        name: String!
        email: String!
        role: String!
        verified: Boolean
        createdAt: String
        updatedAt: String

    }

    type Course{
        _id: ID!
        name: String!
        description: String!
        price: String!
        instructor: User!
        createdAt: String
        updatedAt: String
    }

    type Query {
        users: [User]
        courses: [Course]
        course(id:ID!): Course
    }

    type Mutation{
        addUser(name: String!, email: String!, password: String!, role: String!): String!
    }
`;
