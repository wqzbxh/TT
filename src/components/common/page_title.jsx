import React, { Component } from 'react';

class PageTitle extends Component {
  render() {
    const {page_title} = this.props;
    return (
        <div className="flex flex-wrap px-3 rounded-lg">
          <div className="flex-none w-full sm:w-1/4 h-16 flex text-center items-center">
            <h1 className=" text-2xl font-medium text-gray-700">{page_title} </h1>
          </div>
        </div> 
    );
  }
}

export default PageTitle;
