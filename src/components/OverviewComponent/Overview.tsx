import React from 'react';
import Header from '../HeaderComponent/Header';
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
        <div className={OverviewCss.Content}>content page</div>
      </div>
    </div>
  );
}

export default Overview;
