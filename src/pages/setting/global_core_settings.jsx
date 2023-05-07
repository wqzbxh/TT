import React, { Component } from "react";
import BtnCustomize from "../../components/common/btn";
import { isNotEmpty, isNumber } from "../../utils/validataUnits";
import { regSetCompany } from "../../api";
import ErrorToast from "../../components/ErrorMessage";
import EditBtnCustomize from "../../components/common/btn_edit";


class GlobalCoreSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMsg: [],// error message
      is_edit: 'disabled',
      edit_text: 'Edit',
      databaseiP: '',
      OnPremise: 0,
      licenceTypesName: ''
    };
  }


  btnHandleCommit = async () => {
    const { licenceCount, moduleName, moduleIP, isEnabled } = this.state;
    let formData = {
      isEnabled: isEnabled,
      licenceCount: licenceCount,
      moduleIP: moduleIP,
      moduleName: moduleName,
    }
    const response = await regSetCompany(formData);
    const result = response.data;
    if (result.code === 200) {
      this.setState(prevState => ({
        listMsg: [...prevState.listMsg, { 'msg':result.msg, color: '#45C468' }],
      }));
    } else {
      console.log(result.msg)

    }
  }

  /*********处理表数据 */
  handelChange = (even) => {
    const target = even.target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name;
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }
  /***********************错误信息提示时，接收错误信息提示组件中每次销毁后单个错误信息的新数组，避免当有新的信息提示出现时，又全部加载 */
  /***********************When an error message prompts, receive a new array of a single error message after each destruction in the error message prompt component, so as to avoid loading all of them when a new message prompt appears */
  upErrorList = (newErroeList) => {
    this.setState({
      listMsg: newErroeList
    });
  }

  btnHandleEdit = (isEditStatus) => {
    console.log(isEditStatus)
    if (isEditStatus) {
      this.setState({
        is_edit: '',
        edit_text: 'editing'
      })
    } else {
      this.setState({
        is_edit: 'disabled',
        edit_text: 'Edit'
      })
    }

  }
  render() {
    const { is_edit, edit_text, listMsg } = this.state;
    return (
      <div className="relative max-w-2xl px-8  bg-white rounded-lg">
        <div className="absolute top-0 right-0">
          <EditBtnCustomize btnText={edit_text} isEdit={is_edit} btnHandleEdit={this.btnHandleEdit} />
        </div>
        <div className="space-y-12">
          <div className=" border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">

              <div className="sm:col-span-4">
                <label htmlFor="companyPostalCode" className="block text-sm font-semibold leading-6 text-customize-dark-19">  OnPremise  </label>
                <div className="mt-2 relative">
                  <div class="absolute inset-y-0 left-0 flex items-center  ">
                    <span class="iconfont icon-leixing px-4"></span>
                  </div>
                  <input
                    type="number"
                    onChange={this.handelChange}
                    disabled={is_edit}
                    name="OnPremise"
                    id="OnPremise"
                    autoComplete="address-level1"
                    className="block  rounded-md border-0 py-1.5 pl-14 w-1/3 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="companyPostalCode" className="block text-sm font-semibold leading-6 text-customize-dark-19">  databaseiP  </label>
                <div className="mt-2 relative">
                  <div class="absolute inset-y-0 left-0 flex items-center  ">
                    <span class="iconfont icon-leixing px-4"></span>
                  </div>
                  <input
                    type="number"
                    onChange={this.handelChange}
                    disabled={is_edit}
                    name="databaseiP"
                    id="databaseiP"
                    autoComplete="address-level1"
                    className="block  rounded-md focus:border-gray-500 -webkit-inner-spin-button -webkit-outer-spin-button border-0 py-1.5 pl-14 w-1/3 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="companyPostalCode" className="block text-sm font-semibold leading-6 text-customize-dark-19">  licenceTypesName   </label>
                <div className="mt-2 relative">
                  <div class="absolute inset-y-0 left-0 flex items-center  ">
                    <span class="iconfont icon-leixing px-4"></span>
                  </div>
                  <input
                    type="number"
                    onChange={this.handelChange}
                    disabled={is_edit}
                    name="licenceTypesName"
                    id="licenceTypesName"
                    autoComplete="address-level1"
                    className="block  rounded-md focus:border-gray-500 -webkit-inner-spin-button -webkit-outer-spin-button border-0 py-1.5 pl-14 w-1/3 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                </div>
              </div>
              {is_edit === '' ? <BtnCustomize btnText='Save' btnHandleCommit={this.btnHandleCommit} /> : ''}
              <ErrorToast listdd={listMsg} upErrorListComback={this.upErrorList} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GlobalCoreSettings;
