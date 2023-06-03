import BlogForm from '@/components/blog-form';

export default function AddPostPage() {
  async function addPost(data: FormData) {
    'use server';
    console.log(data);
  }

  return (
    <main>
      <h1 className="text-4xl font-semibold text-gray-700">Add Post</h1>
      <BlogForm onSave={addPost} />
    </main>
  );
}
