import React, { Component } from 'react';

class FormTitle extends Component {
    
  closeModalForm = () => {
    this.props.closeModal();
  };
  render() {
    const {titleTxt} = this.props;
    console.log(titleTxt)
    return (
     <div className="text-right flex px-6  bg-white">
        <div className="subpixel-antialiased text-2xl font-semibold flex-grow h-16 text-center">
        { titleTxt ? titleTxt : " Create New Item"}
        </div>
        <div className="flex-none px-2 h-16 ...">
          <span
            className="iconfont icon-a-shouye-fuben_tijiaochenggong      hover:text-green-500  text-2xl text-gray-900"
            onClick={this.saveTimePlan}
          ></span>
        </div>
        <div className="flex-none px-1 h-16 ...">
          <span
            className="iconfont  text-2xl  text-gray-900  hover:text-red-500 icon-a-shouye-fuben_tishicuowu"
            onClick={this.closeModalForm}
          ></span>
        </div>

      </div>

    );
  }
}

export default FormTitle;
