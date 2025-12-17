import { Question, QuestionType } from './types';

export const READING_TITLE = "Albert Einstein";

export const READING_PASSAGE = `
Albert Einstein is perhaps the best-known scientist of the 20th century. He received the Nobel Prize in Physics in 1921 and his theories of special and general relativity are of great importance to many branches of physics and astronomy. He is well known for his theories about light, matter, gravity, space and time. His most famous idea is that energy and mass are different forms of the same thing.

Einstein was born in Wurttemberg, Germany on 14th March 1879. His family was Jewish but he had not been very religious in his youth although he became very interested in Judaism in later life.

It is well documented that Einstein did not begin speaking until after the age of three. In fact, he found speaking so difficult that his family were worried that he would never start to speak. When Einstein was four years old, his father gave him a magnetic compass. It was this compass that inspired him to explore the world of science. He wanted to understand why the needle always pointed north whichever way he turned the compass. It looked as if the needle was moving itself. But the needle was inside a closed case, so no other force (such as the wind) could have been moving it. And this is how Einstein became interested in studying science and mathematics.

In fact, he was so clever that at the age of 12 he taught himself Euclidean geometry. At fifteen, he went to school in Munich which he found very boring. He finished secondary school in Aarau, Switzerland and entered the Swiss Federal Institute of Technology in Zurich from which he graduated in 1900. But Einstein did not like the teaching there either. He often missed classes and used the time to study physics on his own or to play the violin instead. However, he was able to pass his examinations by studying the notes of a classmate. His teachers did not have a good opinion of him and refused to recommend him for a university position. So, he got a job in a patent office in Switzerland. While he was working there, he wrote the papers that first made him famous as a great scientist.

Einstein had two severely disabled children with his first wife, Mileva. His daughter (whose name we do not know) was born about a year before their marriage in January 1902. She was looked after by her Serbian grandparents until she died at the age of two. It is generally believed that she died from scarlet fever but there are those who believe that she may have suffered from a disorder known as Down Syndrome. But there is not enough evidence to know for sure. In fact, no one even knew that she had existed until Einstein's granddaughter found 54 love letters that Einstein and Mileva had written to each other between 1897 and 1903. She found these letters inside a shoe box in their attic in California. Einstein and Mileva's son, Eduard, was diagnosed with schizophrenia. He spent decades in hospitals and died in Zurich in 1965.

Just before the start of World War I, Einstein moved back to Germany and became director of a school there. But in 1933, following death threats from the Nazis, he moved to the United States, where he died on 18th April 1955.
`;

// Questions 1-10 are reconstructed based on the provided answer key and context of the passage.
// Questions 11-13 are provided explicitly.
export const QUESTIONS: Question[] = [
  // TRUE/FALSE/NOT GIVEN
  {
    id: 1,
    type: QuestionType.TRUE_FALSE_NOT_GIVEN,
    text: "Einstein is considered one of the most famous scientists of the 1900s.",
    correctAnswer: "TRUE"
  },
  {
    id: 2,
    type: QuestionType.TRUE_FALSE_NOT_GIVEN,
    text: "Einstein won the Nobel Prize in Physics in the early 1920s.",
    correctAnswer: "TRUE"
  },
  {
    id: 3,
    type: QuestionType.TRUE_FALSE_NOT_GIVEN,
    text: "Einstein was a deeply religious child throughout his youth.",
    correctAnswer: "FALSE"
  },
  {
    id: 4,
    type: QuestionType.TRUE_FALSE_NOT_GIVEN,
    text: "Einstein began speaking at a very early age.",
    correctAnswer: "FALSE"
  },
  {
    id: 5,
    type: QuestionType.TRUE_FALSE_NOT_GIVEN,
    text: "Einstein's parents consulted a doctor about his speech delay.",
    correctAnswer: "NOT GIVEN"
  },
  {
    id: 6,
    type: QuestionType.TRUE_FALSE_NOT_GIVEN,
    text: "Einstein received the magnetic compass as a birthday gift.",
    correctAnswer: "NOT GIVEN"
  },
  {
    id: 7,
    type: QuestionType.TRUE_FALSE_NOT_GIVEN,
    text: "The compass needle moved because of the wind inside the case.",
    correctAnswer: "FALSE"
  },
  {
    id: 8,
    type: QuestionType.TRUE_FALSE_NOT_GIVEN,
    text: "Einstein excelled in all subjects at the school in Munich.",
    correctAnswer: "NOT GIVEN"
  },
  // SENTENCE COMPLETION
  {
    id: 9,
    type: QuestionType.SENTENCE_COMPLETION,
    text: "Young Einstein was fascinated by the fact that the compass needle always ______.",
    correctAnswer: "pointed north"
  },
  {
    id: 10,
    type: QuestionType.SENTENCE_COMPLETION,
    text: "Because he disliked his classes, Einstein often studied physics ______.",
    correctAnswer: "on his own"
  },
  // MULTIPLE CHOICE
  {
    id: 11,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "The name of Einstein's daughter",
    options: [
      "was not chosen by him.",
      "is a mystery.",
      "is shared by his granddaughter.",
      "was discovered in a shoe box."
    ],
    correctAnswer: "B"
  },
  {
    id: 12,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "His teachers would not recommend him for a university position because",
    options: [
      "they did not think highly of him.",
      "they thought he was a Nazi.",
      "his wife was Serbian.",
      "he seldom skipped classes."
    ],
    correctAnswer: "A"
  },
  {
    id: 13,
    type: QuestionType.MULTIPLE_CHOICE,
    text: "The famous physicist Albert Einstein was of",
    options: [
      "Swiss origin.",
      "Jewish origin.",
      "American origin.",
      "Austrian origin."
    ],
    correctAnswer: "B"
  }
];
