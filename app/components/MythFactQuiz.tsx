'use client';

import { useMemo, useState } from 'react';

type Answer = 'Myth' | 'Fact';

type QuizItem = {
  prompt: string;
  answer: Answer;
  explanation: string;
};

const questions: QuizItem[] = [
  {
    prompt: 'Gender-based violence only happens in poor communities.',
    answer: 'Myth',
    explanation: 'GBV can happen anywhere, regardless of class, age, religion, or education level. It is rooted in power, control, and harmful gender norms.',
  },
  {
    prompt: 'A person is not being abused if there is no physical injury.',
    answer: 'Myth',
    explanation: 'Psychological, emotional, economic, and digital abuse can be just as damaging and are forms of gender-based violence.',
  },
  {
    prompt: 'Many victims of GBV do not report it because they feel ashamed or unsafe.',
    answer: 'Fact',
    explanation: 'Fear, stigma, financial dependence, and lack of trust in systems often prevent survivors from speaking out.',
  },
  {
    prompt: 'Catcalling and sexist comments in public spaces are harmless.',
    answer: 'Myth',
    explanation: 'Sexual harassment in public and online spaces can create fear, stress, and a hostile environment, and it is a form of gender-based violence.',
  },
  {
    prompt: 'Women and girls are the only ones affected by GBV.',
    answer: 'Myth',
    explanation: 'GBV can affect women, men, LGBTQIA+ people, and children. However, women and girls are disproportionately affected due to gender inequality.',
  },
  {
    prompt: 'Consent can be withdrawn at any time during a sexual activity.',
    answer: 'Fact',
    explanation: 'Consent must be clear, informed, and ongoing. If a person says no, hesitates, or cannot consent, it is not valid consent.',
  },
  {
    prompt: 'If someone stays in an abusive relationship, it means they do not want to leave.',
    answer: 'Myth',
    explanation: 'There are many reasons survivors stay: fear, trauma, children, finances, isolation, or hope that the abuse will stop.',
  },
  {
    prompt: 'Technology can be used to control, monitor, or harass someone.',
    answer: 'Fact',
    explanation: 'Digital surveillance, stalking, revenge porn, and online harassment are modern forms of gender-based violence.',
  },
  {
    prompt: 'Domestic violence always involves visible physical attacks.',
    answer: 'Myth',
    explanation: 'Abuse can also be emotional, verbal, economic, coercive, and psychological, and it often escalates slowly.',
  },
  {
    prompt: 'Men can also experience gender-based violence.',
    answer: 'Fact',
    explanation: 'While patterns differ, men and boys can also experience violence rooted in gender expectations, stigma, and power imbalances.',
  },
  {
    prompt: 'The Safe Spaces Act applies only to schools.',
    answer: 'Myth',
    explanation: 'The Safe Spaces Act covers public spaces, workplaces, schools, and online harassment, and it aims to prevent gender-based sexual harassment.',
  },
  {
    prompt: 'Victims of GBV are always easy to recognize.',
    answer: 'Myth',
    explanation: 'Survivors may look confident, calm, or even unchanged on the outside. Abuse is not always obvious.',
  },
  {
    prompt: 'Economic abuse is a form of abuse because it controls a person’s independence.',
    answer: 'Fact',
    explanation: 'Withholding money, controlling income, or preventing work can trap someone in a harmful situation.',
  },
  {
    prompt: 'A survivor should be asked to “just leave” the situation immediately.',
    answer: 'Myth',
    explanation: 'Leaving can be dangerous, complicated, and sometimes not immediately possible. Support and safety planning are essential.',
  },
  {
    prompt: 'Gender equality means treating everyone the same without recognizing different needs.',
    answer: 'Myth',
    explanation: 'Gender equality includes fairness, respect, and access to opportunities, while also recognizing that different people face different barriers.',
  },
  {
    prompt: 'The Anti-Violence Against Women and Their Children Act covers protection orders.',
    answer: 'Fact',
    explanation: 'RA 9262 provides legal remedies such as Barangay Protection Orders, Temporary Protection Orders, and Permanent Protection Orders.',
  },
  {
    prompt: 'Marital rape is not legally recognized in the Philippines.',
    answer: 'Myth',
    explanation: 'The Anti-Rape Law expanded the definition of rape and recognized that marriage does not nullify consent.',
  },
  {
    prompt: 'GBV is a private issue that should be handled only within the family.',
    answer: 'Myth',
    explanation: 'GBV is a social and human rights issue that requires community awareness, legal protection, and public accountability.',
  },
  {
    prompt: 'If a survivor reports abuse, the responsibility is to support them first, not judge them.',
    answer: 'Fact',
    explanation: 'Believing survivors, listening without blame, and connecting them to safe support can prevent further harm.',
  },
  {
    prompt: 'Ending GBV requires only stronger laws and not community education.',
    answer: 'Myth',
    explanation: 'Laws matter, but prevention also requires education, changing harmful norms, and building reporting systems that survivors trust.',
  },
];

export default function MythFactQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, Answer>>({});
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = questions[currentIndex];
  const score = useMemo(
    () => Object.entries(selectedAnswers).filter(([key, value]) => value === questions[Number(key)]?.answer).length,
    [selectedAnswers]
  );

  const answeredCount = Object.keys(selectedAnswers).length;
  const isComplete = answeredCount === questions.length;

  const handleAnswer = (answer: Answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: answer }));
    setShowExplanation(true);
  };

  const goNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowExplanation(false);
      return;
    }
    setCurrentIndex(0);
    setShowExplanation(false);
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
  };

  const answered = selectedAnswers[currentIndex];
  const revealAnswer = answered && showExplanation;

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-950 via-purple-950 to-fuchsia-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-white/10 text-pink-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide border border-white/10">
            🧠 Myth or Fact
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Test Your Knowledge on{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #f9a8d4, #c4b5fd, #fcd34d)' }}>
              Gender-Based Violence
            </span>
          </h2>
          <p className="text-purple-100 max-w-2xl mx-auto text-lg">
            Answer 20 quick statements to see how much you really know about GBV, rights, and prevention.
          </p>
        </div>

        <div className="mb-8 flex items-center justify-between gap-4 text-sm text-purple-100">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Progress:</span>
            <span>{answeredCount}/{questions.length}</span>
          </div>
          <div className="text-pink-200 font-semibold">Score: {score}/{questions.length}</div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
          {!isComplete ? (
            <>
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.2em] text-purple-200">
                  Question {currentIndex + 1} / {questions.length}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-pink-200">
                  Myth or Fact
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold leading-relaxed mb-8">
                “{currentQuestion.prompt}”
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {(['Myth', 'Fact'] as const).map((option) => {
                  const isSelected = answered === option;
                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={Boolean(answered)}
                      className={`p-4 rounded-2xl border text-lg font-bold transition-all duration-200 ${
                        isSelected
                          ? 'bg-white text-indigo-950 border-white shadow-lg'
                          : 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                      } ${answered ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {revealAnswer && (
                <div className="rounded-2xl border border-pink-300/40 bg-pink-500/10 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-pink-200 mb-2">Answer</p>
                  <p className="text-2xl font-black mb-3 text-white">{currentQuestion.answer}</p>
                  <p className="text-purple-100 leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              )}

              <div className="mt-8 flex justify-end">
                {revealAnswer ? (
                  <button
                    onClick={goNext}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold hover:scale-[1.02] transition-transform"
                  >
                    {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                  </button>
                ) : (
                  <div className="text-sm text-purple-200">Choose your answer to reveal the explanation.</div>
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl font-black mb-3">Quiz Complete!</h3>
              <p className="text-xl text-purple-100 mb-6">
                You scored <span className="font-black text-pink-300">{score}</span> out of {questions.length}.
              </p>

              <div className="max-w-xl mx-auto bg-white/5 rounded-2xl p-5 border border-white/10 text-left mb-6">
                <h4 className="font-bold text-white mb-3">Quick takeaway</h4>
                <p className="text-purple-100 leading-relaxed">
                  Understanding the signs, myths, and realities of gender-based violence is the first step toward prevention and support. Everyone has a role in ending violence and promoting safe, equal communities.
                </p>
              </div>

              <button
                onClick={resetQuiz}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 text-indigo-950 font-black hover:scale-[1.02] transition-transform"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
