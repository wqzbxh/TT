import React, { Component } from 'react';
import Tab from '../../components/common/tab';
import CompanySettings from './company_settings';
import CostCenterSettings from './cost_center_setting';
import CountriesSettings from './countries_settings';
import CurrencySettings from './currency';
import GlobalCoreSettings from './global_core_settings';
import HolidaySettings from './holiday_settings';
import ModulesSettings from './modules_settings';
import Permissions from './permissions';
class Settings extends Component {
  render() {

      const tabs = [
        {
          label: 'Company Settings',
          content: <CompanySettings /> ,
        },{
          label: 'Currency Settings',
          content: <CurrencySettings />,
        },{
          label: 'Countries Settings',
          content: <CountriesSettings />,
        },{
          label: 'Modules Settings',
          content: <ModulesSettings />,
        }, {
          label: 'GlobalCore Settings',
          content: <GlobalCoreSettings />,
        }, {
          label: 'CostCenter Settings',
          content: <CostCenterSettings />,
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
