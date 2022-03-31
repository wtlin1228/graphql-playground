import { join } from 'path';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const graphqlRootModule = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,

  // To use Apollo Sandbox instead of the graphql-playground as a GraphQL IDE for local development.
  playground: false,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],

  // Generate TypeScript definitions (classes and interfaces) that correspond to the GraphQL SDL types.
  typePaths: ['./**/*.graphql'],
  definitions: {
    path: join(process.cwd(), 'src/graphql.ts'),
  },
});

@Module({
  imports: [graphqlRootModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
