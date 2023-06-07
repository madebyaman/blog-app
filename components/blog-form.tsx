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
          className="focus:ring-gray-800 px-4 py-3 mt-1 focus:border-yellow-300 block w-full sm:text-sm border-2 border-transparent text-gray-800 outline-none max-w-sm"
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
        className="self-start bg-yellow-300 items-center text-black font-medium hover:bg-yellow-400 px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 inline-flex gap-1"
      >
        <CheckIcon className="h-4 w-4" />
        Save
      </button>
    </form>
  );
}
