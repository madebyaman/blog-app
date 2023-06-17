import BlogForm from '@/components/blog-form';
import Heading from '@/components/heading';
import { getBlogPost } from '../page';
import { notFound } from 'next/navigation';
import db from '@/lib/drizzle';
import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export default async function EditPostPage({
  params,
}: {
  params: { post: string };
}) {
  const blogPost = await getBlogPost(Number(params.post));

  if (!blogPost) return notFound();

  async function savePost(data: FormData) {
    'use server';
    const title = data.get('title') as string;
    const content = data.get('content') as string;
    if (!title || !content) {
      throw new Error('Missing title or content');
    }

    try {
      const post = await db
        .update(posts)
        .set({
          title: title,
          content: content,
        })
        .where(eq(posts.id, Number(params.post)));
      revalidatePath(`/${params.post}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <Heading>Edit Blog</Heading>
      <BlogForm onSave={savePost} />
    </main>
  );
}
