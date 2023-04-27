import React, { Component } from 'react';
import Tab from '../../components/common/tab';
import Site from './site';
class Settings extends Component {
  render() {

      const tabs = [
        {
          label: 'Tab 1',
          content: <Site /> ,
        }, {
          label: 'Tab 1',
          content: <div>This is the content for Tab 1</div>,
        }, {
          label: 'Tab 1',
          content: <div>This is the content for Tab 1</div>,
        }, {
          label: 'Tab 1',
          content: <div>This is the content for Tab 1</div>,
        }, {
          label: 'Tab 1',
          content: <div>This is the content for Tab 1</div>,
        },
        {
          label: 'Tab 2',
          content: <div>This is the content for Tab 2</div>,
        },
        {
          label: 'Tab 3',
          content: <div>This is the content for Tab 3</div>,
        },
      ];
    return (
      <div>
        <Tab tabs={tabs} />
      </div>

    );
  }
}

export default Settings;
