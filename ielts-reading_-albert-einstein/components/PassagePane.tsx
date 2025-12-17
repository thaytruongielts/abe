import React from 'react';
import { READING_TITLE, READING_PASSAGE } from '../constants';
import { BookOpen } from 'lucide-react';

const PassagePane: React.FC = () => {
  // Split paragraphs for better rendering
  const paragraphs = READING_PASSAGE.split('\n').filter(p => p.trim() !== '');

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center space-x-2 sticky top-0 z-10">
        <BookOpen className="text-blue-600 w-5 h-5" />
        <h2 className="text-lg font-bold text-gray-800 tracking-tight">{READING_TITLE}</h2>
      </div>
      <div className="p-6 overflow-y-auto custom-scrollbar flex-grow">
        {paragraphs.map((para, idx) => (
          <p key={idx} className="mb-4 text-gray-700 leading-relaxed text-justify last:mb-0">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PassagePane;