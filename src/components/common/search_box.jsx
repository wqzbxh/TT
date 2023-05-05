import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
     
        <div className="border flex px-2  py-2 items-center justify-left  rounded-sm bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="flex-none  text-lg px-8 font-semibold  ">FILTER</div>
          {this.props.edit ? this.props.edit:''}
          {this.props.customerFilterName ? this.props.customerFilterName:''}
          <div className="relative inline-block border w-64 mx-1 h-10">
            <select className="block w-full py-2 px-4 pr-8 leading-tight text-gray-700 bg-white rounded-lg appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-500">
              <option className="bg-transparent border-0" value="1">
                Active
              </option>
              <option className="bg-transparent border-0" value="2">
                Archived
              </option>
              <option className="bg-transparent border-0" value="3">
                All
              </option>
            </select>
          </div>

          <div className="flex-none pr-8  px-1 h-10 flex  w-64  ">
            <input
              className="px-1 py-2 w-full border "
              type="text"
              placeholder="请输入内容"
            />
            <span className="py-2  mx-1 px-4 text-white  border-r border-b border-t  bg-customize-blue-49 hover:bg-customize-blue-1a iconfont icon-chaxun1"></span> &nbsp;&nbsp; 
         
    
          </div>
          
          {/* <div className="rounded-2xl px-10">
            <div className="text-bluegray-700 text-sm px-2.5 py-2  border border-blue-200  hover:border-dashed  hover:bg-blue-50  hover:">
                <span className="iconfont icon-chaxun1"></span> &nbsp;&nbsp;  Apply filter
            </div>
          </div> */}
          {this.props.createCustomerBtn ? this.props.createCustomerBtn:''}
          {this.props.createCreateTeamUserBtn ? this.props.createCreateTeamUserBtn:''}
          {this.props.createCreateTeamUserRoleBtn ? this.props.createCreateTeamUserRoleBtn:''}
        </div>
        
    );
  }
}

export default SearchBox;
