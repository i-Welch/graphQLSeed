import { GraphQLServer } from 'graphql-yoga';

const resolvers = {
	Query: {
		hello: (root, args, context, info) => `Hello ${args.name || 'World'}`
	}
}

const server = new GraphQLServer({
	typeDefs: "./src/schema.graphql",
	resolvers
});

server.start(() => {
	console.log("server started!!");
});