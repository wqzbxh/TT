import React, { Component } from 'react';
import Tab from '../../components/common/tab';
import Site from './site';
import HolidaySettings from './holiday_settings';
import Permissions from './permissions';
class Settings extends Component {
  render() {

      const tabs = [
        {
          label: 'Site  Settings',
          content: <Site /> ,
        }, {
          label: 'Holiday Settings',
          content: <HolidaySettings />,
        }, {
          label: 'Permissions',
          content: <Permissions />,
        }
      ];
    return (
      <div>
        <Tab tabs={tabs} />
      </div>

    );
  }
}

export default Settings;
