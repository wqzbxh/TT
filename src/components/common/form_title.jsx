import React, { Component } from 'react';

class FormTitle extends Component {
    
 closeModal = () => {
    this.props.closeModal();
  };
  render() {

    return (
     <div className="text-right flex px-6  bg-white">
        <div className="subpixel-antialiased text-2xl font-semibold flex-grow h-16 text-center">
        Create New Project (Customer 1)
        </div>
        <div className="flex-none px-2 h-16 ...">
          <span
            className="iconfont icon-tijiao01 hover:text-green-900  text-2xl text-green-500"
            onClick={this.saveTimePlan}
          ></span>
        </div>
        <div className="flex-none px-1 h-16 ...">
          <span
            className="iconfont  text-2xl  text-red-500  hover:text-red-700 icon-shanchu3"
            onClick={this.closeModal}
          ></span>
        </div>

      </div>

    );
  }
}

export default FormTitle;
