import React, { Component } from "react";
import Tab from "../../components/common/tab";
import Report from "./report";
import PerformanceMonitor from "./performance_monitor";
import HrReport from "./hr_report";
import ViewLogfile from "./view_logfile";

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    
    const tabs = [ 
      {
        label: 'Report',
        content: <Report/>,
      }, {
        label: 'Performance Monitor',
        content:<PerformanceMonitor />,
      },
      {
        label: 'view Logfile',
        content: <ViewLogfile />,
      },
      {
        label: 'HR Report',
        content: <HrReport />,
      },
    ];
    return (
      <div className="bg-gray-100 md:mx-auto">
         <Tab tabs={tabs} />
    </div>
    );
  }
}

export default Statistics;
