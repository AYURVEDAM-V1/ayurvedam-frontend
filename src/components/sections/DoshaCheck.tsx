"use client";

import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { doshaNames, doshaQuestions, scoreDosha } from "@/data/dosha";

export function DoshaCheck() {
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    doshaQuestions.map(() => null),
  );

  const result = scoreDosha(answers);

  const answerQuestion = (questionIndex: number, optionIndex: number) => {
    setAnswers((current) =>
      current.map((answer, index) =>
        index === questionIndex ? optionIndex : answer,
      ),
    );
  };

  return (
    <Section tone="surface" id="prakriti">
      <Container className="grid grid-cols-[0.9fr_1.1fr] items-start gap-[clamp(32px,5vw,64px)] max-[901px]:grid-cols-1">
        <SectionHead
          devanagari="त्रिदोष"
          eyebrow="Know your dosha"
          title="A two-minute look at your constitution"
          lead="Vata, Pitta and Kapha are present in everyone in different proportions. Answer five quick questions for a first impression. Your Vaidya confirms it properly with Nadi Pariksha, the pulse reading."
          flush
        >
          <div
            data-tone="band"
            aria-live="polite"
            className="grid gap-4 rounded-[20px] bg-band p-[1.6rem] text-band-fg"
          >
            <strong className="font-display text-[1.5rem] leading-[normal] font-normal">
              {result.heading}
            </strong>
            <div className="grid gap-[0.7rem]">
              {doshaNames.map((name, index) => (
                <div
                  key={name}
                  className="grid grid-cols-[4.5rem_1fr_2.6rem] items-center gap-[0.7rem] text-[0.9rem] tabular-nums"
                >
                  <span>{name}</span>
                  <span className="h-2.5 overflow-hidden rounded-full bg-band-fg/15">
                    <span
                      className="block h-full rounded-full bg-oil transition-[width] duration-500"
                      style={{ width: `${result.percentages[index]}%` }}
                    />
                  </span>
                  <span>{result.percentages[index]}%</span>
                </div>
              ))}
            </div>
            <p className="text-[0.95rem] opacity-85">{result.note}</p>
            <small className="text-[0.8rem] opacity-70">
              For guidance only. This is not a diagnosis.
            </small>
          </div>
        </SectionHead>

        <form aria-label="Dosha questionnaire">
          {doshaQuestions.map((item, questionIndex) => (
            <fieldset key={item.question} className="mb-[1.3rem] min-w-0">
              <legend className="mb-[0.6rem] font-bold">
                {questionIndex + 1}. {item.question}
              </legend>
              <div className="grid grid-cols-3 gap-2 max-[561px]:grid-cols-1">
                {item.options.map((option, optionIndex) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-start gap-2 rounded-xl border-[1.5px] border-line px-[0.8rem] py-[0.65rem] text-[0.9rem] text-muted has-checked:border-copper has-checked:bg-copper/8 has-checked:text-ink"
                  >
                    <input
                      type="radio"
                      name={`dosha-${questionIndex}`}
                      value={optionIndex}
                      checked={answers[questionIndex] === optionIndex}
                      onChange={() => answerQuestion(questionIndex, optionIndex)}
                      className="mt-1 mr-[3px] ml-[5px] accent-copper"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
        </form>
      </Container>
    </Section>
  );
}
