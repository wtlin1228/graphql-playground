import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

function sleep(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

@Injectable()
export class PostService {
  create(createPostInput: CreatePostInput) {
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  async search(title: string) {
    if (title === 'React') {
      await sleep(1);
    }

    if (title === 'JavaScript') {
      await sleep(5);
    }

    if (title === 'TypeScript') {
      await sleep(10);
    }

    return [
      {
        id: uuidv4(),
        title: `${title} - ${1}`,
      },
      {
        id: uuidv4(),
        title: `${title} - ${2}`,
      },
      {
        id: uuidv4(),
        title: `${title} - ${3}`,
      },
      {
        id: uuidv4(),
        title: `${title} - ${4}`,
      },
    ];
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
