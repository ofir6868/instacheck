import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { InstagramService } from './instagram.service';

@Controller('instagram')
export class InstagramController {
  constructor(private readonly instagramService: InstagramService) {}

  @Get(':username')
  async getUserPosts(@Param('username') username: string) {
    return this.instagramService.getPosts(username);
  }
}