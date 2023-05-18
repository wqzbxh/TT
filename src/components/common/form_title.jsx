import React, { Component } from 'react';

class FormTitle extends Component {
    
  closeModalForm = () => {
    this.props.closeModal();
  };
  saveFormCommit = () => {
    this.props.saveFormCommit();
  };
  render() {
    const {titleTxt} = this.props;
    return (
     <div className="text-right  pt-4 pr-3 flex rounded-tr-lg rounded-tl-lg   bg-gray-200">
        <div className="subpixel-antialiased text-2xl font-semibold flex-grow h-16 text-center">
        { titleTxt ? titleTxt : " Create New Item"}
        </div>
        <div  className="flex-none px-2 h-16 ...">
          <span
            className="iconfont icon-a-shouye-fuben_tijiaochenggong   text-customize-success  hover:text-customize-complementary  text-2xl"
            onClick={this.saveFormCommit}
          ></span>
        </div>
        <div className="flex-none px-1 h-16 ...">
          <span
            className="iconfont  text-2xl  text-customize-alert  hover:text-customize-primary-2 icon-a-shouye-fuben_tishicuowu"
            onClick={this.closeModalForm}
          ></span>
        </div>

      </div>

    );
  }
}

export default FormTitle;
