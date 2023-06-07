'use client';
import { format } from 'date-fns';

export default function BlogDate({ date }: { date: string | Date }) {
  return (
    <time dateTime={new Date(date).toISOString()} className="text-sm">
      {format(new Date(date), 'MM/dd/yyyy')}
    </time>
  );
}
