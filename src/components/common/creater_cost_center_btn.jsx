import React, { Component } from "react";
import CreateCostCenter from "../../pages/setting/cost_center_create";

class CreateCostCenterBtn extends Component {
  state = {
    isCustomerModal: false,
    isCreaterMedal: false,
  };

  /***********关闭编辑框 */
  /***********cLOSE the add box */
  closeCustomerData = () => {
    this.setState({
      isCustomerModal: false,
    });
  };
  /***********打开添加框 */
  /***********Open the add box */
  handleCreateCustomer = () => {
    this.setState({ isCustomerModal: true });
  };
  render() {
    const { page_title, dataList, isCustomerModal, isCreaterMedal } =  this.state;
    return (
      <div className="rounded-2xl px-2">
        <div
          className="text-bluegray-700 text-sm px-2.5 py-2 border border-customize-dark-42  hover:border-dashed  hover:bg-customize-dark-19  hover:text-white"
          onClick={this.handleCreateCustomer}
        >
          <span className="iconfont icon-xinzeng5"></span> &nbsp;New CostCenter
        </div>
        <CreateCostCenter
          isVisible={isCustomerModal}
          closeModal={this.closeCustomerData}
        />
      </div>
    );
  }
}

export default CreateCostCenterBtn;
