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
  let [optionA, optionB, optionC, optionD] = ['a choice', 'better choos', 'continue trying', 'do not stop'];

  let submitButton;
  if (completed) {
    submitButton = (
      <button
        type='submit'
        className={TestPageComponentCss.submit}
        onClick={(e) => {
          nextQuestion(e);
        }}
      >
        Done
      </button>
    );
  } else {
    submitButton = (
      <button
        type='submit'
        className={TestPageComponentCss.submit}
        onClick={(e) => {
          nextQuestion(e);
        }}
      >
        Next
      </button>
    );
  }

  const nextQuestion = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
              <ul className={TestPageComponentCss.optionsContainer}>
                <div className={TestPageComponentCss.option}>
                  <li id='optionA' className={TestPageComponentCss.optionInput}>
                    {optionA}
                  </li>
                </div>
                <div className={TestPageComponentCss.option}>
                  <li id='optionB' className={TestPageComponentCss.optionInput}>
                    {optionB}
                  </li>
                </div>
                <div className={TestPageComponentCss.option}>
                  <li id='optionC' className={TestPageComponentCss.optionInput}>
                    {optionC}
                  </li>
                </div>
                <div className={TestPageComponentCss.option}>
                  <li id='optionD' className={TestPageComponentCss.optionInput}>
                    {optionD}
                  </li>
                </div>
                <ProgressBar bgcolor='#14a800' completed={`${progress}`} />
                <div className={TestPageComponentCss.questionFooter}>
                  <p>Question {questionNumber}</p>
                  {submitButton}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPageComponent;
