import { CheckIcon } from '@heroicons/react/24/outline';
import MarkdownTextarea from './markdown-textarea';

export default function BlogForm({
  defaultTitle,
  defaultContent,
  onSave,
}: {
  defaultTitle?: string;
  defaultContent?: string;
  onSave: (data: FormData) => void;
}) {
  return (
    <form action={onSave} className="flex flex-col gap-4 mt-6">
      <label>
        Title
        <input
          type="text"
          className="rounded focus:ring-gray-500 px-4 py-3 mt-1 focus:border-emerald-500 block w-full sm:text-sm border border-gray-300 text-gray-800 outline-none max-w-sm"
          id="title"
          name="title"
          defaultValue={defaultTitle ?? ''}
        />
      </label>
      <MarkdownTextarea
        label="Content"
        name="content"
        defaultValue={defaultContent ?? ''}
      />
      <button
        type="submit"
        className="rounded-md self-start bg-emerald-600 items-center text-white font-medium shadow-sm hover:bg-emerald-500 px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 inline-flex gap-1"
      >
        <CheckIcon className="h-4 w-4" />
        Save
      </button>
    </form>
  );
}
