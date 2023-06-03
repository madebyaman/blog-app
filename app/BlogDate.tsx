'use client';
import { format } from 'date-fns';

export default function BlogDate({ date }: { date: string }) {
  return (
    <time dateTime={date} className="text-sm">
      {format(new Date(date), 'MM/dd/yyyy')}
    </time>
  );
}
