import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface MarkdownTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function MarkdownTextarea({
  label,
  ...props
}: MarkdownTextareaProps) {
  return (
    <div className="flex flex-col focus:border focus:border-emerald-500">
      <label className="">
        {label}
        <textarea
          className="border-b-0 focus:border-yellow-300 px-4 py-3 mt-1 block w-full sm:text-sm border-2 border-transparent text-gray-800 outline-none"
          rows={4}
          required
          {...props}
        />
      </label>
      <div className="bg-white bg-opacity-40 rounded-b border border-gray-200 text-gray-600">
        <div className="p-2 text-xs flex flex-row gap-2 items-center">
          <InformationCircleIcon className="h-4 w-4" />
          Supports markdown or plain text
        </div>
      </div>
    </div>
  );
}
