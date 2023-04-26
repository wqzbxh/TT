import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
     
        <div className="border flex px-2  py-2 items-center justify-center  rounded-sm bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="flex-none  text-lg px-8 ">FILTER</div>
          <div className="relative inline-block border w-64">
            <select className="block w-full py-3 px-4 pr-8 leading-tight text-gray-700 bg-white rounded-lg appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-500">
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
          <div className="flex-grow px-8  ">
            <input
              className="px-4 py-3 rounded-lg w-full border  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              placeholder="请输入内容"
            />
          </div>

          <div className="rounded-2xl px-10">
            <div className="text-bluegray-700 text-sm px-2.5 py-2 border border-blue-200  hover:border-dashed  hover:bg-blue-50  hover:">
                <span className="iconfont icon-chaxun1"></span> &nbsp;&nbsp;  Apply filter
            </div>
          </div>
        </div>
    );
  }
}

export default SearchBox;
