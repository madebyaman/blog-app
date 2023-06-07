import BlogForm from '@/components/blog-form';
import Heading from '@/components/heading';

export default function AddPostPage() {
  async function addPost(data: FormData) {
    'use server';
    console.log(data);
  }

  return (
    <main>
      <Heading>Add Post</Heading>
      <BlogForm onSave={addPost} />
    </main>
  );
}
