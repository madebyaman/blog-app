import BlogForm from '@/components/blog-form';
import Heading from '@/components/heading';

export default function EditPostPage() {
  async function savePost(data: FormData) {
    'use server';
    console.log(data);
  }

  return (
    <main>
      <Heading>Edit Blog</Heading>
      <BlogForm onSave={savePost} />
    </main>
  );
}
