import React, { Component } from 'react';

class SearchActiveSelect extends Component {
  render() {
    return (
      <div className="relative inline-block border w-64 mx-1 h-10">
      <select className="block w-full py-2 px-4 pr-8 leading-tight text-customize-dark-19  bg-white rounded-lg appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-500">
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
        
    );
  }
}

export default SearchActiveSelect;
