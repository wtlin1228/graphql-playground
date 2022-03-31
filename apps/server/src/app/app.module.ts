import { join } from 'path';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PostModule } from './modules/post/post.module';

const graphqlRootModule = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,

  // Generate TypeScript definitions (classes and interfaces) that correspond to the GraphQL SDL types.
  typePaths: ['./**/*.graphql'],
  definitions: {
    path: join(process.cwd(), './apps/server/src/app/graphql.ts'),
  },
});

@Module({
  imports: [graphqlRootModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
