export default function EditPostPage() {
  async function saveForm(data: FormData) {
    'use server';
    console.log(data);
  }

  return (
    <main>
      <form action={saveForm}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
        <label htmlFor="content">Content</label>
        <textarea id="content"></textarea>
        <input type="submit" value="Save" />
      </form>
    </main>
  );
}
