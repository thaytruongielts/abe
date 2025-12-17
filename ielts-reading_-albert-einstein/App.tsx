import React, { useState, useEffect } from 'react';
import PassagePane from './components/PassagePane';
import QuestionPane from './components/QuestionPane';
import ResultModal from './components/ResultModal';
import { QUESTIONS } from './constants';
import { UserAnswers, ScoreResult } from './types';
import { Send } from 'lucide-react';

const App: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState<ScoreResult | null>(null);

  const handleAnswerChange = (id: number, value: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const calculateBandScore = (rawScore: number): number => {
    // Standard IELTS Reading Academic Band Score Table (approximate)
    if (rawScore >= 39) return 9.0;
    if (rawScore >= 37) return 8.5;
    if (rawScore >= 35) return 8.0;
    if (rawScore >= 33) return 7.5;
    if (rawScore >= 30) return 7.0;
    if (rawScore >= 27) return 6.5;
    if (rawScore >= 23) return 6.0;
    if (rawScore >= 19) return 5.5;
    if (rawScore >= 15) return 5.0;
    if (rawScore >= 13) return 4.5;
    if (rawScore >= 10) return 4.0;
    if (rawScore >= 8) return 3.5;
    if (rawScore >= 6) return 3.0;
    if (rawScore >= 4) return 2.5;
    return 2.0; // Minimal baseline
  };

  const handleSubmit = () => {
    let correctCount = 0;

    QUESTIONS.forEach((q) => {
      const userVal = userAnswers[q.id]?.trim().toLowerCase() || "";
      const correctVal = q.correctAnswer.trim().toLowerCase();
      
      // Basic strict matching. 
      // For IELTS, gap fills are case-insensitive.
      if (userVal === correctVal) {
        correctCount++;
      }
    });

    const total = QUESTIONS.length;
    // User requested formula: (Correct * 40 / Total)
    const rawScoreProjected = (correctCount * 40) / total;
    
    // Map projected raw score to band score
    const bandScore = calculateBandScore(Math.round(rawScoreProjected));

    setResult({
      correctCount,
      totalQuestions: total,
      rawScoreProjected,
      bandScore
    });
    setIsSubmitted(true);
  };

  const handleRetry = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm z-20 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
             <div className="bg-blue-600 text-white font-bold p-1.5 rounded text-xl">IELTS</div>
             <h1 className="text-xl font-bold text-gray-800">Reading Practice: Albert Einstein</h1>
          </div>
          
          {!isSubmitted && (
            <button
              onClick={handleSubmit}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg transform active:scale-95 duration-150"
            >
              <Send className="w-4 h-4" />
              <span>Submit Answers</span>
            </button>
          )}
          
          {isSubmitted && result && (
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-xs text-gray-500 uppercase font-bold">Band Score</p>
                <p className="text-2xl font-bold text-blue-600 leading-none">{result.bandScore}</p>
              </div>
              <button
                onClick={() => setResult(result)} // Re-open modal
                className="text-gray-500 hover:text-gray-900 underline text-sm"
              >
                View Details
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content - Split Screen */}
      <main className="flex-grow flex overflow-hidden bg-gray-100 p-4 gap-4 max-w-[1920px] mx-auto w-full">
        {/* Left Pane: Reading Passage */}
        <section className="w-1/2 min-w-[350px] flex-shrink-0 h-full">
          <PassagePane />
        </section>

        {/* Right Pane: Questions */}
        <section className="w-1/2 min-w-[350px] flex-shrink-0 h-full">
          <QuestionPane 
            userAnswers={userAnswers} 
            onAnswerChange={handleAnswerChange} 
            isSubmitted={isSubmitted} 
          />
        </section>
      </main>

      {/* Mobile Overlay warning (optional, since this is a complex UI) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-yellow-100 p-2 text-center text-yellow-800 text-xs border-t border-yellow-200">
        For the best experience, please use a tablet or desktop device.
      </div>

      {/* Results Modal */}
      {isSubmitted && result && (
        <ResultModal result={result} onRetry={handleRetry} />
      )}
    </div>
  );
};

export default App;