import React from 'react';
import { Question, QuestionType, UserAnswers } from '../types';
import { QUESTIONS } from '../constants';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

interface QuestionPaneProps {
  userAnswers: UserAnswers;
  onAnswerChange: (id: number, value: string) => void;
  isSubmitted: boolean;
}

const QuestionPane: React.FC<QuestionPaneProps> = ({ userAnswers, onAnswerChange, isSubmitted }) => {
  
  const getStatusIcon = (q: Question) => {
    if (!isSubmitted) return null;
    
    const userAnswer = userAnswers[q.id]?.trim().toLowerCase() || "";
    const correctAnswer = q.correctAnswer.trim().toLowerCase();
    
    const isCorrect = userAnswer === correctAnswer;

    return isCorrect ? (
      <CheckCircle2 className="w-5 h-5 text-green-500 inline-block ml-2" />
    ) : (
      <div className="inline-flex items-center ml-2">
        <XCircle className="w-5 h-5 text-red-500" />
        {/* We do NOT show the correct answer, just Correct/Incorrect status as requested */}
      </div>
    );
  };

  const renderTFNG = (q: Question) => (
    <div className="space-y-2 mt-2">
      {['TRUE', 'FALSE', 'NOT GIVEN'].map((option) => (
        <label key={option} className={`flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-50 ${isSubmitted ? 'pointer-events-none' : ''}`}>
          <input
            type="radio"
            name={`q-${q.id}`}
            value={option}
            checked={userAnswers[q.id] === option}
            onChange={(e) => onAnswerChange(q.id, e.target.value)}
            className="text-blue-600 focus:ring-blue-500"
            disabled={isSubmitted}
          />
          <span className="text-sm font-medium text-gray-700">{option}</span>
        </label>
      ))}
    </div>
  );

  const renderMCQ = (q: Question) => (
    <div className="space-y-2 mt-2">
      {q.options?.map((opt, idx) => {
        const letter = String.fromCharCode(65 + idx); // A, B, C, D...
        return (
          <label key={idx} className={`flex items-start space-x-2 cursor-pointer p-2 rounded hover:bg-gray-50 ${isSubmitted ? 'pointer-events-none' : ''}`}>
            <input
              type="radio"
              name={`q-${q.id}`}
              value={letter}
              checked={userAnswers[q.id] === letter}
              onChange={(e) => onAnswerChange(q.id, e.target.value)}
              className="mt-1 text-blue-600 focus:ring-blue-500"
              disabled={isSubmitted}
            />
            <span className="text-sm text-gray-700"><span className="font-bold mr-1">{letter}.</span> {opt}</span>
          </label>
        );
      })}
    </div>
  );

  const renderCompletion = (q: Question) => {
    const parts = q.text.split('______');
    return (
      <div className="mt-2 text-gray-800 leading-7">
        {parts[0]}
        <input
          type="text"
          value={userAnswers[q.id] || ''}
          onChange={(e) => onAnswerChange(q.id, e.target.value)}
          className={`border-b-2 border-gray-300 px-2 py-0 focus:outline-none focus:border-blue-500 mx-2 bg-transparent w-48 ${isSubmitted ? 'border-gray-200 text-gray-600' : ''}`}
          placeholder="Answer"
          disabled={isSubmitted}
        />
        {parts[1]}
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center space-x-2 sticky top-0 z-10">
        <HelpCircle className="text-blue-600 w-5 h-5" />
        <h2 className="text-lg font-bold text-gray-800 tracking-tight">Questions 1 - 13</h2>
      </div>
      
      <div className="p-6 overflow-y-auto custom-scrollbar flex-grow space-y-8">
        {/* Group Questions 1-8: TFNG */}
        <section>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Questions 1-8</h3>
          <p className="text-sm text-gray-600 mb-4 italic">Do the following statements agree with the information given in the reading passage?<br/>Select <strong>TRUE</strong>, <strong>FALSE</strong>, or <strong>NOT GIVEN</strong>.</p>
          <div className="space-y-6">
            {QUESTIONS.filter(q => q.type === QuestionType.TRUE_FALSE_NOT_GIVEN).map((q) => (
              <div key={q.id} className="pb-4 border-b border-gray-100 last:border-0">
                <div className="flex items-start justify-between">
                  <p className="text-gray-800 font-medium"><span className="font-bold text-blue-600 mr-2">{q.id}.</span> {q.text}</p>
                  {getStatusIcon(q)}
                </div>
                {renderTFNG(q)}
              </div>
            ))}
          </div>
        </section>

        {/* Group Questions 9-10: Completion */}
        <section>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Questions 9-10</h3>
          <p className="text-sm text-gray-600 mb-4 italic">Complete the sentences below. Write <strong>NO MORE THAN THREE WORDS</strong> from the passage for each answer.</p>
          <div className="space-y-6">
            {QUESTIONS.filter(q => q.type === QuestionType.SENTENCE_COMPLETION).map((q) => (
              <div key={q.id} className="pb-4 border-b border-gray-100 last:border-0">
                <div className="flex items-center">
                   <span className="font-bold text-blue-600 mr-2">{q.id}.</span>
                   {getStatusIcon(q)}
                </div>
                {renderCompletion(q)}
              </div>
            ))}
          </div>
        </section>

        {/* Group Questions 11-13: MCQ */}
        <section>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Questions 11-13</h3>
          <p className="text-sm text-gray-600 mb-4 italic">Choose the correct letter, <strong>A, B, C or D</strong>.</p>
          <div className="space-y-6">
            {QUESTIONS.filter(q => q.type === QuestionType.MULTIPLE_CHOICE).map((q) => (
              <div key={q.id} className="pb-4 border-b border-gray-100 last:border-0">
                 <div className="flex items-start justify-between">
                  <p className="text-gray-800 font-medium"><span className="font-bold text-blue-600 mr-2">{q.id}.</span> {q.text}</p>
                  {getStatusIcon(q)}
                </div>
                {renderMCQ(q)}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuestionPane;