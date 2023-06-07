import BlogForm from '@/components/blog-form';
import Heading from '@/components/heading';

  async function savePost(data: FormData) {
    'use server';
    const title = data.get('title') as string;
    const content = data.get('content') as string;
    if (!title || !content) {
      throw new Error('Missing title or content');
    }

    try {
      const db = await connect();
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
