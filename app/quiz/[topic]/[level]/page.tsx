'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { mcqs } from '@/lib/data';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

export default function QuizTestPage() {
  const params = useParams();
  const topic = params.topic as string;
  const level = params.level as string;
  
  // Use type assertion to tell TypeScript this is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const questions = (mcqs as any)[topic]?.[level] || [];
  const [answers, setAnswers] = useState<string[]>(Array(20).fill(''));
  const router = useRouter();

  function submitQuiz() {
    localStorage.setItem('userAnswers', JSON.stringify({ topic, level, answers }));
    router.push('/result');
  }

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">{topic} - {level} Quiz</h2>
      {questions.map((q: Question, idx: number) => (
        <div key={idx} className="p-4 bg-gray-800 rounded-xl">
          <p>{idx + 1}. {q.question}</p>
          {q.options.map((opt: string, i: number) => (
            <label key={i} className="block mt-2">
              <input
                type="radio"
                name={`q${idx}`}
                value={opt}
                checked={answers[idx] === opt}
                onChange={() => {
                  const newAns = [...answers];
                  newAns[idx] = opt;
                  setAnswers(newAns);
                }}
              />
              <span className="ml-2">{opt}</span>
            </label>
          ))}
        </div>
      ))}
      <button onClick={submitQuiz} className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">Submit</button>
    </div>
  );
}
