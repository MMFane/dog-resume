import React from 'react';

interface DetailSectionProps {
  title: string;
  content: React.ReactNode;
}

function DetailSection({ title, content }: DetailSectionProps) {
  return (
    <div className="mb-4 w-full justify-between bg-amber-100 dark:bg-neutral-700">
      <h2 className="p-4 text-2xl font-bold text-amber-800 dark:bg-neutral-600 dark:text-amber-200 dark:opacity-85">
        {title}
      </h2>
      <div className="p-8 dark:text-amber-100">{content}</div>
    </div>
  );
}

export default DetailSection;
