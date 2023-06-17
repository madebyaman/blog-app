import BlogForm from '@/components/blog-form';
import Heading from '@/components/heading';
import { posts } from '@/db/schema';
import db from '@/lib/drizzle';

export default function AddPostPage() {
  async function addPost(data: FormData) {
    'use server';
    const title = data.get('title') as string;
    const content = data.get('content') as string;
    if (!title || !content) {
      throw new Error('Missing title or content');
    }

    try {
      const post = await db.insert(posts).values({
        title: title,
        content: content,
      });
      return post;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <Heading>Add Post</Heading>
      <BlogForm onSave={addPost} />
    </main>
  );
}
