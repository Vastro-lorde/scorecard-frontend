import React from 'react';
import ChartContainer from '../ChartContainerComponent/ChartContainer';
import Header from '../HeaderComponent/Header';
import ScoreCard from '../ScoreCardComponent/ScoreCard';
import Sidebar from '../SidebarComponent/Sidebar';
import OverviewCss from './Overview.module.css';

function Overview() {
  return (
    <div className={OverviewCss.body}>
      <div className={OverviewCss.Header}>
        <Header />
      </div>
      <div className={OverviewCss.Main}>
        <div className={OverviewCss.Sidebar}>
          <Sidebar />
        </div>
        <div className={OverviewCss.Content}>
          <h1 className={OverviewCss.title}>Overview</h1>
          <div className={OverviewCss.scoreCards}>
            <ScoreCard score={50} position={'1st'} average={0.524} />
            <ScoreCard score={80} position={'2nd'} average={-0.021} />
            <ScoreCard score={60} position={'3rd'} average={0.322} />
            <ScoreCard score={73} position={'4th'} average={-0.12} />
          </div>
          <ChartContainer />
        </div>
      </div>
    </div>
  );
}

export default Overview;
