import BlogForm from '@/components/blog-form';

export default function EditPostPage() {
  async function savePost(data: FormData) {
    'use server';
    console.log(data);
  }

  return (
    <main>
      <h1 className="text-4xl font-semibold text-gray-700">Edit Blog</h1>
      <BlogForm onSave={savePost} />
    </main>
  );
}
