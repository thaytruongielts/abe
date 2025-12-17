export enum QuestionType {
  TRUE_FALSE_NOT_GIVEN = 'TFNG',
  MULTIPLE_CHOICE = 'MCQ',
  SENTENCE_COMPLETION = 'COMPLETION'
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  options?: string[]; // For MCQ
  correctAnswer: string;
}

export interface UserAnswers {
  [key: number]: string;
}

export interface ScoreResult {
  correctCount: number;
  totalQuestions: number;
  rawScoreProjected: number; // The score out of 40
  bandScore: number;
}