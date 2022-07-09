import React, { useRef, useState } from 'react';
import Header from '../HeaderComponent/Header';
import ProgressBar from '../ProgressBarComponent/ProgressBar';
import ScoreModal from '../ScoreModalComponent/ScoreModal';
import Sidebar from '../SidebarComponent/Sidebar';
import TestPageComponentCss from './TestPageComponent.module.css';

const TestPageComponent = () => {
  const [progress, setProgress] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const modalContent = useRef<HTMLDivElement>(null);

  const Title = 'JavaScript';
  let Question = 'Explain Scope and Scope Chain in javascript.';
  let [optionA, optionB, optionC, optionD] = ['a', 'b', 'c', 'd'];

  let submitButton;
  if (completed) {
    submitButton = (
      <button type='submit' className={TestPageComponentCss.submit}>
        Done
      </button>
    );
  } else {
    submitButton = (
      <button type='submit' className={TestPageComponentCss.submit}>
        Next
      </button>
    );
  }

  const nextQuestion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (progress === 90) setCompleted(true);
    if (progress !== 100) setQuestionNumber(questionNumber + 1);
    if (!completed) {
      setProgress(progress + 10);
    }
    if (completed && (modalContent.current?.style.display === '' || modalContent.current?.style.display === 'none')) {
      modalContent.current.style.display = 'block';
    }
  };

  return (
    <div>
      <div className={TestPageComponentCss.body}>
        <div className={TestPageComponentCss.Header}>
          <Header />
        </div>
        <div className={TestPageComponentCss.Main}>
          <div className={TestPageComponentCss.Sidebar}>
            <Sidebar />
          </div>
          <div className={TestPageComponentCss.Content}>
            <div>
              <div className={TestPageComponentCss.modalContent} ref={modalContent}>
                <ScoreModal score={38} />
              </div>
              <p className={TestPageComponentCss.testTitle}>{Title} Assessent</p>
              <p className={TestPageComponentCss.question}>{Question}</p>
              <form
                action=''
                className={TestPageComponentCss.optionsContainer}
                onSubmit={(e) => {
                  nextQuestion(e);
                }}
              >
                <div className={TestPageComponentCss.option}>
                  <div>
                    <input type='radio' name='answer' id='optionA' className={TestPageComponentCss.optionInput} />
                    <div className={TestPageComponentCss.circle}></div>
                  </div>
                  <label htmlFor='optionA' className={TestPageComponentCss.optionLabel}>
                    {optionA}
                  </label>
                </div>
                <div className={TestPageComponentCss.option}>
                  <div>
                    <input type='radio' name='answer' id='optionB' className={TestPageComponentCss.optionInput} />
                    <div className={TestPageComponentCss.circle}></div>
                  </div>
                  <label htmlFor='optionB' className={TestPageComponentCss.optionLabel}>
                    {optionB}
                  </label>
                </div>
                <div className={TestPageComponentCss.option}>
                  <div>
                    <input type='radio' name='answer' id='optionC' className={TestPageComponentCss.optionInput} />
                    <div className={TestPageComponentCss.circle}></div>
                  </div>
                  <label htmlFor='optionC' className={TestPageComponentCss.optionLabel}>
                    {optionC}
                  </label>
                </div>
                <div className={TestPageComponentCss.option}>
                  <div>
                    <input type='radio' name='answer' id='optionD' className={TestPageComponentCss.optionInput} />
                    <div className={TestPageComponentCss.circle}></div>
                  </div>
                  <label htmlFor='optionD' className={TestPageComponentCss.optionLabel}>
                    {optionD}
                  </label>
                </div>
                <ProgressBar bgcolor='#14a800' completed={`${progress}`} />
                <div className={TestPageComponentCss.questionFooter}>
                  <p>Question {questionNumber}</p>
                  {submitButton}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPageComponent;
