import { Info } from 'lucide-react';
import React from 'react';

export default function InfoBox({ title = 'Info', children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 bg-blue-900/30 border-l-4 border-blue-500 rounded-lg p-4 my-6">
      <Info className="text-blue-400 mt-1 shrink-0" />
      <div>
        <div className="font-semibold text-blue-300 mb-1">{title}</div>
        <div className="text-blue-100 leading-relaxed">{children}</div>
      </div>
    </div>
  );
} 