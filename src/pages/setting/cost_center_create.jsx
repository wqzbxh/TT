import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import ErrorToast from '../../components/ErrorMessage';
import FormTitle from '../../components/common/form_title';
import CustomerInput from '../../components/common/customer_data_input';
class CreateCostCenter extends Component {
  constructor(props) {
    super(props);
    // 初始状态为第一个菜单项选中
    this.state = {
      isVisible: false,
      listError: [],
      title: 'Create New CostCenter'
    };
  }

  closeModal = () => {
    this.props.closeModal();
  };

  closeModalSon = () => {
    this.closeModal();
  };



  /************callbackProjectData */
  callbackCustomerData = () => {

  }
  render() {
    const { listError, title } = this.state;
    const { isVisible } = this.props;
    if (!isVisible) return null
    return (
      <div className="fixed bg-black bg-opacity-50 inset-0 z-50 overflow-auto bg-black-transparen overflow-y-auto">
        <div className="flex items-center justify-center  h-3/4  mt-2 min-h-screen">
          <div className="relative h-5/6 text-gray-800 rounded-lg w-3/5">

            <div className="px-2 text-left">
              <div className="w-full  mx-auto">
                <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                  <FormTitle closeModal={this.closeModalSon} titleTxt={title} />
                  <div className="sm:col-span-4">
                    <label htmlFor="companyPostalCode" className="block text-sm font-semibold leading-6 text-customize-dark-19">  name </label>
                    <div className="mt-2 relative">
                      <div class="absolute inset-y-0 left-0 flex items-center  ">
                        <span class="iconfont icon-leixing px-4"></span>
                      </div>
                      <input
                        type="text"
                        onChange={this.handelChange}
                        name="name"
                        id="name"
                        autoComplete="address-level1"
                        className="block  rounded-md focus:border-gray-500 -webkit-inner-spin-button -webkit-outer-spin-button border-0 py-1.5 pl-14 w-1/3 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  
                  <div className="col-span-full">
                    <label htmlFor="companyPostalCode" className="block text-sm font-semibold leading-6 text-customize-dark-19"> city </label>
                    <div className="mt-2 relative ">
                      <div class="absolute inset-y-0 left-0 flex items-center  ">
                        <span class="iconfont icon-leixing px-4"></span>
                      </div>
                      <input
                        type="text"
                        onChange={this.handelChange}
                        name="city"
                        id="city"
                        autoComplete="address-level1"
                        className="block  rounded-md focus:border-gray-500 -webkit-inner-spin-button -webkit-outer-spin-button border-0 py-1.5 pl-14 w-1/3 text-customize-dark-19 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="companyPostalCode" className="block text-sm font-semibold leading-6 text-customize-dark-19">  postalCode </label>
                    <div className="mt-2 relative">
                      <div class="absolute inset-y-0 left-0 flex items-center  ">
                        <span class="iconfont icon-leixing px-4"></span>
                      </div>
                      <input
                        type="number"
                        onChange={this.handelChange}
                        name="postalCode"
                        id="postalCode"
                        autoComplete="address-level1"
                        className="block  rounded-md focus:border-gray-500 -webkit-inner-spin-button -webkit-outer-spin-button border-0 py-1.5 pl-14 w-1/3 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="companyPostalCode" className="block text-sm font-semibold leading-6 text-customize-dark-19">  street1 </label>
                    <div className="mt-2 relative">
                      <div class="absolute inset-y-0 left-0 flex items-center  ">
                        <span class="iconfont icon-leixing px-4"></span>
                      </div>
                      <input
                        type="text"
                        onChange={this.handelChange}
                        name="street1"
                        id="street1"
                        autoComplete="address-level1"
                        className="block  rounded-md  w-3/5 focus:border-gray-500 -webkit-inner-spin-button -webkit-outer-spin-button border-0 py-1.5 pl-14 w-1/3 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-full">
                    <label htmlFor="companyPostalCode" className="block text-sm font-semibold leading-6 text-customize-dark-19">  street2 </label>
                    <div className="mt-2 relative">
                      <div class="absolute inset-y-0 left-0 flex items-center  ">
                        <span class="iconfont icon-leixing px-4"></span>
                      </div>
                      <input
                        type="text"
                        onChange={this.handelChange}
                        name="street2"
                        id="street2"
                        autoComplete="address-level1"
                        className="block  rounded-md w-3/5 focus:border-gray-500 -webkit-inner-spin-button -webkit-outer-spin-button border-0 py-1.5 pl-14 w-1/3 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* 内容 */}
          </div>
        </div>
        {/* 信息提示 */}
        <div>
          <ErrorToast
            listdd={listError}
            upErrorListComback={this.upErrorList}
          />
        </div>
      </div>
    );
  }
}

export default CreateCostCenter;
