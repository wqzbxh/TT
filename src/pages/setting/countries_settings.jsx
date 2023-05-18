import React, { Component } from "react";
import BtnCustomize from "../../components/common/btn";
import { isNotEmpty, isNumber } from "../../utils/validataUnits";
import { regSetCompany, regCountrySeting } from "../../api";
import ErrorToast from "../../components/ErrorMessage";
import EditBtnCustomize from "../../components/common/btn_edit";

class CountriesSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMsg: [], // error message
      is_edit: "disabled",
      edit_text: "Edit",
      name: "",
      id_countries: 0,
      countryCode: "",
      iso: "",
    };
  }
  btnHandleCommit = async () => {
    const { iso,name, countryCode, id_countries} = this.state;
    let originalData = {
      iso: iso,
      countryCode: countryCode,
      name: name,
    }
    // 当currency_id存在的时候是修改，并把id组装到originalData中
   // When the Currency_id exists, it is modified, and the ID is assembled in the OriginalData
    const formData = id_countries ?  { ...originalData, id: id_countries } :originalData;
    const methodType = id_countries ? "PUT" : "POST" ;
    const response = await regCountrySeting(formData,methodType);
    const result = response.data;
    if (result.code === 200) {
      this.setState(prevState => ({
        listMsg: [...prevState.listMsg, { 'msg': result.msg, color: '#45C468' }],
        currency_id:result.data.id
      }));
      this.btnHandleEdit(false);
    } else {
      this.setState(prevState => ({
        listMsg: [...prevState.listMsg, { 'msg': result.msg, color: '#F44336' }],
      }));
    }
  };

  /**
   * 获取公司模块信息
   * Get the company's Modules information
   */
  ajaxCurrentList = async () => {
    const response = await regCountrySeting({}, "GET");
    const result = response.data;
    if (result.code === 200) {
      this.setState({
        name: result.data.name,
        id_countries: result.data.id_countries,
        countryCode: result.data.countryCode,
        iso: result.data.iso,
      })
    } else {
      console.log(result.msg);
    }
  };

  /**
   * 页面挂载完毕加载函数，执行初始化的动作
   * After the loading of the page, the loading function is completed, and the initialization action is performed
   */

  componentDidMount = () => {
    this.ajaxCurrentList();
  };

  /*********处理表数据 */
  handelChange = (even) => {
    const target = even.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };
  /***********************错误信息提示时，接收错误信息提示组件中每次销毁后单个错误信息的新数组，避免当有新的信息提示出现时，又全部加载 */
  /***********************When an error message prompts, receive a new array of a single error message after each destruction in the error message prompt component, so as to avoid loading all of them when a new message prompt appears */
  upErrorList = (newErroeList) => {
    this.setState({
      listMsg: newErroeList,
    });
  };
  
/**
 * 打开才能编辑，默认禁止编辑，防止误操作
 * You can edit only, and the editor is prohibited by default to prevent misunderstanding
 */
btnHandleEdit = () => {
  this.state.statusIoc = !this.state.statusIoc
  if (this.state.statusIoc) {
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
    const { is_edit, name,iso,edit_text,statusIoc,countryCode, listMsg } = this.state;
    return (
      <div className="relative max-w-2xl px-8  bg-white rounded-lg">
        <div className="absolute top-0 right-0">
          <EditBtnCustomize
            btnText={edit_text}
            isEdit={is_edit}
            statusIoc={statusIoc}
            btnHandleEdit={this.btnHandleEdit}
          />
        </div>
        <div className="space-y-12">
          <div className=" border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
             

              <div className="sm:col-span-4">
                <label
                  htmlFor="companyPostalCode"
                  className="block text-sm font-medium leading-6 text-customize-dark-19"
                >
                  {" "}
                  Country Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    onChange={this.handelChange}
                    disabled={is_edit}
                    value={name}
                    name="name"
                    id="name"
                    autoComplete="address-level1"
                    className="block  rounded-md border-0 py-1.5 pl-2 w-1/3 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="currency_country"
                  className="block text-sm font-medium leading-6 text-customize-dark-19"
                >
                  {" "}
                  Country Code
                </label>
                <div className="mt-2">
                  <input
                    id="countryCode"
                    onChange={this.handelChange}
                    disabled={is_edit}
                    name="countryCode"
                    value={countryCode}
                    type="text"
                    autoComplete="currency_country"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="currency_country"
                  className="block text-sm font-medium leading-6 text-customize-dark-19"
                >
                  {" "}
                  Iso
                </label>
                <div className="mt-2">
                  <input
                    id="iso"
                    onChange={this.handelChange}
                    disabled={is_edit}
                    name="iso"
                    value={iso}
                    type="text"
                    autoComplete="currency_country"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {is_edit === "" ? (
                <BtnCustomize
                  btnText="Save"
                  btnHandleCommit={this.btnHandleCommit}
                />
              ) : (
                ""
              )}
              <ErrorToast
                listdd={listMsg}
                upErrorListComback={this.upErrorList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountriesSettings;
