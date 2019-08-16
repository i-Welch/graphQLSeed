import { GraphQLServer } from 'graphql-yoga';

const resolvers = {
	Query: {
		hello: (_, { name }) => `Hello ${name || 'World'}`
	}
}

const server = new GraphQLServer({
	typeDefs: "./src/schema.graphql",
	resolvers
});

server.start(() => {
	console.log("server started!!");
});