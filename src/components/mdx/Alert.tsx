import { AlertCircle } from 'lucide-react';
import React from 'react';

export default function Alert({ title = 'Alert', children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 bg-red-900/30 border-l-4 border-red-500 rounded-lg p-4 my-6">
      <AlertCircle className="text-red-400 mt-1 shrink-0" />
      <div>
        <div className="font-semibold text-red-300 mb-1">{title}</div>
        <div className="text-red-100 leading-relaxed">{children}</div>
      </div>
    </div>
  );
} 