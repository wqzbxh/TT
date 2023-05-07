import React, { Component } from 'react';
import SearchInput from './search_input';

class SearchBox extends Component {
  render() {
    return (
        <div className="border flex px-2  py-2 items-center justify-left  rounded-sm bg-white shadow overflow-hidden sm:rounded-lg">
          {/* <div className="flex-none  text-lg px-8 font-semibold  ">FILTER</div> */}
          {this.props.edit ? this.props.edit:''}
          {this.props.customerFilterName ? this.props.customerFilterName:''}
          {this.props.searchActiveSelect ? this.props.searchActiveSelect:''}
          {this.props.searchInput ? this.props.searchInput:''}
          {this.props.createCustomerBtn ? this.props.createCustomerBtn:''}
          {this.props.createCreateTeamUserBtn ? this.props.createCreateTeamUserBtn:''}
          {this.props.createCreateTeamUserRoleBtn ? this.props.createCreateTeamUserRoleBtn:''}
          {this.props.createCreateCostCenterBtn ? this.props.createCreateCostCenterBtn:''}
        </div>
        
    );
  }
}

export default SearchBox;
