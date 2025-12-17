import React from 'react';
import { ScoreResult } from '../types';
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import { RefreshCcw } from 'lucide-react';

interface ResultModalProps {
  result: ScoreResult;
  onRetry: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ result, onRetry }) => {
  
  // Data for chart
  const data = [
    {
      name: 'Max Raw Score',
      uv: 40,
      fill: '#e2e8f0', 
    },
    {
      name: 'Your Raw Score',
      uv: result.rawScoreProjected,
      fill: '#3b82f6', 
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        <div className="bg-blue-600 px-6 py-4">
          <h2 className="text-2xl font-bold text-white text-center">Result Overview</h2>
        </div>
        
        <div className="p-8">
          <div className="flex flex-col items-center">
            {/* Band Score Display */}
            <div className="relative flex items-center justify-center w-40 h-40 mb-6">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <span className="text-sm text-gray-500 uppercase font-semibold">Band Score</span>
                 <span className="text-5xl font-extrabold text-gray-900">{result.bandScore}</span>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                 <RadialBarChart 
                   innerRadius="80%" 
                   outerRadius="100%" 
                   barSize={10} 
                   data={[{ value: result.bandScore, fill: '#3b82f6' }]} 
                   startAngle={90} 
                   endAngle={-270}
                   >
                   <RadialBar
                     background
                     dataKey="value"
                     cornerRadius={10}
                   />
                 </RadialBarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full mb-6">
                <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Correct Answers</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">
                        {result.correctCount} <span className="text-gray-400 text-lg">/ {result.totalQuestions}</span>
                    </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                     <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Scaled Raw Score</p>
                     <p className="text-2xl font-bold text-blue-600 mt-1">
                        {result.rawScoreProjected.toFixed(1)} <span className="text-gray-400 text-lg">/ 40</span>
                     </p>
                </div>
            </div>

            <p className="text-center text-gray-500 text-sm mb-6">
              The Band Score is estimated based on the percentage of correct answers scaled to the standard IELTS 40-question format.
            </p>

            <button 
              onClick={onRetry}
              className="flex items-center justify-center space-x-2 w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl transition-colors font-medium shadow-lg hover:shadow-xl transform active:scale-95 duration-200"
            >
              <RefreshCcw className="w-5 h-5" />
              <span>Retry Test</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;