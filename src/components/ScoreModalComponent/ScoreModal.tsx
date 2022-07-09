import React from 'react';
import successfullyDone from '../../assets/successfullyDone.svg';
import ScoreModalCss from './ScoreModal.module.css';

interface Props {
  score: number;
}

const ScoreModal = ({ score }: Props) => {
  let grade;
  let successImg;
  let result = score < 50 ? false : true;
  if (result) {
    grade = <p className={ScoreModalCss.ifPassed}>Awesome work you passed</p>;
    successImg = <img src={successfullyDone} alt='passed' />;
  } else {
    grade = <p className={ScoreModalCss.ifPassed}>Sorry, you didn't pass</p>;
  }
  return (
    <div className={ScoreModalCss.scoreModal}>
      <div className={ScoreModalCss.imgContainer}>{successImg}</div>
      {grade}
      <p className={ScoreModalCss.testRemark}>Test score {score}%</p>
      <button className={ScoreModalCss.testBtn}>Take Another Test</button>
    </div>
  );
};

export default ScoreModal;
