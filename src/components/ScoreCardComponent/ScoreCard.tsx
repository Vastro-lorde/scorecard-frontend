import React from 'react';
import ScoreCardCss from './ScoreCard.module.css';
import arrowUp from '../../assets/arrowUp.svg';
import arrowDown from '../../assets/arrowDown.svg';

interface Props {
  score: number;
  position: string;
  average: number;
}

const ScoreCard = ({ score, position, average }: Props) => {
  let scoreImg;
  if (average < 0) {
    scoreImg = <img src={arrowDown} alt='up' />;
  } else {
    scoreImg = <img src={arrowUp} alt='up' />;
  }

  return (
    <div className={ScoreCardCss.scorecard}>
      <p className={ScoreCardCss.assignment}>{position} Assignment</p>
      <div className={ScoreCardCss.scoreAverage}>
        <p className={ScoreCardCss.score}>{score}</p>
        <div className={ScoreCardCss.averageContainer}>
          <div className={ScoreCardCss.arrowUp}>{scoreImg}</div>
          <p className={ScoreCardCss.average}>{average}%</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
