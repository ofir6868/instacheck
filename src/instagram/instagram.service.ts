import { Injectable } from '@nestjs/common';
import { InstagramScraper } from '@aduptive/instagram-scraper';

@Injectable()
export class InstagramService {
  async getPosts(username: string) {
    const scraper = new InstagramScraper();
    try {
      const results = await scraper.getPosts(username, 20);
      if (results.success && results.posts) {
        const posts = results.posts;
        return posts;
      } else {
        throw new Error('Failed to scrape Instagram');
      }
    } catch (err) {
      throw new Error('Failed to scrape Instagram: ' + err.message);
    }
  }
}