import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import ErrorToast from '../../components/ErrorMessage';
import { regCostcenterSetting } from "../../api";
import FormTitle from '../../components/common/form_title';
class EditCostCenter extends Component {
  constructor(props) {
    super(props);
    // 初始状态为第一个菜单项选中
    this.state = {
      isVisible: false,
      listMsg: [],
      title: 'Edit  CostCenter ....',
      name:this.props.currentData.name,
      city:this.props.currentData.city,
      postalCode:this.props.currentData.postalCode,
      street1:this.props.currentData.street1,
      street2:this.props.currentData.street2,
      id_costcenter:this.props.currentData.id_costcenter,
    };
  }

  closeModalSon = () => {
    this.props.closeModal();
    this.props.Refresh();
  };

  /*********处理表数据 */
  handelChange = (even) => {
    const {target} = even;
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name;
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }
  /******
   * 提交数据
   */
  saveFormCommit= async ()=>{
    const {listMsg,name,city,postalCode,id_costcenter,street1,street2 } = this.state;
    let formData = {
      name:name,
      city:city,
      id:id_costcenter,
      postalCode:postalCode,
      street1:street1,
      street2:street2,
    }
    const response = await regCostcenterSetting(formData,'PUT');
    const result = response.data;
    if (result.code === 200) {
      this.setState(prevState => ({
        listMsg: [...prevState.listMsg, { 'msg': result.msg , color: '#45C468' }],
      }));
      setTimeout(() => {
        this.closeModalSon();
      }, 2000);
    } else {
      this.setState(prevState => ({
        listMsg: [...prevState.listMsg, { 'msg': result.msg , color: '#F44336' }],
      }));
    }
    
  }
  
  /***********************错误信息提示时，接收错误信息提示组件中每次销毁后单个错误信息的新数组，避免当有新的信息提示出现时，又全部加载 */
  /***********************When an error message prompts, receive a new array of a single error message after each destruction in the error message prompt component, so as to avoid loading all of them when a new message prompt appears */
  upErrorList = (newErroeList) => {
    this.setState({
      listMsg: newErroeList
    });
  }

  render() {
    const { listMsg, title,name,city,postalCode,street1,street2 } = this.state;
    const { isVisible } = this.props;
    if (!isVisible) return null
    return (
      <div className="fixed  bg-gray-500 bg-opacity-75 inset-0 z-50 overflow-auto bg-black-transparen overflow-y-auto">
        <div className="flex items-center justify-center  h-3/4  mt-2 min-h-screen">
          <div className="relative h-3/5 text-gray-800 rounded-lg w-3/5 ">
            <div className="px-2 text-left">
              <div className="w-full  mx-auto">
                  <FormTitle closeModal={this.closeModalSon} saveFormCommit={this.saveFormCommit} titleTxt={title} />
                <form className="bg-white shadow-lg  px-8 pt-6 pb-8 mb-4">
                  <div className="sm:col-span-4">
                    <label htmlFor="companyPostalCode" className="block text-sm font-medium leading-6 text-customize-dark-19">  name </label>
                    <div className="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center  ">
                        <span class="iconfont icon-leixing px-4"></span>
                      </div>
                      <input
                        type="text"
                        onChange={this.handelChange}
                        name="name"
                        value={name}
                        id="name"
                        autoComplete="address-level1"
                        className="block  rounded-md focus:border-gray-500 -webkit-inner-spin-button -webkit-outer-spin-button border-0 py-1.5 pl-14 w-1/3 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  
                  <div className="col-span-full mt-2 ">
                    <label htmlFor="companyPostalCode" className="block text-sm font-medium leading-6 text-customize-dark-19"> city </label>
                    <div className="relative ">
                      <div class="absolute inset-y-0 left-0 flex items-center  ">
                        <span class="iconfont icon-leixing px-4"></span>
                      </div>
                      <input
                        type="text"
                        onChange={this.handelChange}
                        name="city"
                        value={city}
                        id="city"
                        autoComplete="address-level1"
                        className="block  rounded-md focus:border-gray-500 -webkit-inner-spin-button -webkit-outer-spin-button border-0 py-1.5 pl-14 w-1/3 text-customize-dark-19 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-4 mt-2">
                    <label htmlFor="companyPostalCode" className="block text-sm font-medium leading-6 text-customize-dark-19">  postalCode </label>
                    <div className=" relative">
                      <div class="absolute inset-y-0 left-0 flex items-center  ">
                        <span class="iconfont icon-leixing px-4"></span>
                      </div>
                      <input
                        type="number"
                        onChange={this.handelChange}
                        name="postalCode"
                        value={postalCode}
                        id="postalCode"
                        autoComplete="address-level1"
                        className="block  rounded-md focus:border-gray-500 -webkit-inner-spin-button -webkit-outer-spin-button border-0 py-1.5 pl-14 w-1/3 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-4 mt-2 ">
                    <label htmlFor="companyPostalCode" className="block text-sm font-medium leading-6 text-customize-dark-19">  street1 </label>
                    <div className="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center  ">
                        <span class="iconfont icon-leixing px-4"></span>
                      </div>
                      <input
                        type="text"
                        onChange={this.handelChange}
                        name="street1"
                        id="street1"
                        value={street1}
                        autoComplete="address-level1"
                        className="block  rounded-md  w-3/5 focus:border-gray-500 -webkit-inner-spin-button -webkit-outer-spin-button border-0 py-1.5 pl-14 w-1/3 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div className="sm:col-span-full mt-2 ">
                    <label htmlFor="companyPostalCode" className="block text-sm font-medium leading-6 text-customize-dark-19">  street2 </label>
                    <div className="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center  ">
                        <span class="iconfont icon-leixing px-4"></span>
                      </div>
                      <input
                        type="text"
                        onChange={this.handelChange}
                        name="street2"
                        value={street2}
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
            listdd={listMsg}
            upErrorListComback={this.upErrorList}
          />
        </div>
      </div>
    );
  }
}

export default EditCostCenter;
