import { Lightbulb } from 'lucide-react';
import React from 'react';

export default function Tip({ title = 'Tip', children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 bg-green-900/30 border-l-4 border-green-500 rounded-lg p-4 my-6">
      <Lightbulb className="text-green-400 mt-1 shrink-0" />
      <div>
        <div className="font-semibold text-green-300 mb-1">{title}</div>
        <div className="text-green-100 leading-relaxed">{children}</div>
      </div>
    </div>
  );
} 