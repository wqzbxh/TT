import React, { Component } from "react";
import BtnCustomize from "../../components/common/btn";
import { isNotEmpty, isNumber } from "../../utils/validataUnits";
import { regModules,regGetModules } from "../../api";
import ErrorToast from "../../components/ErrorMessage";
import EditBtnCustomize from "../../components/common/btn_edit";
import SearchBox from "../../components/common/search_box";
import CreateCostCenterBtn from "../../components/common/creater_cost_center_btn";
import DeleteModal from "../../components/common/delete_modal";
import TableList from "../../components/common/table";
import SearchInput from "../../components/common/search_input";

class ModulesSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMsg: [],// error message
      is_edit: 'disabled',
      is_del:false,
      delete_id:0,
      del_data:"",
      edit_text: '',
      is_edit_is_create:'Create',
      is_edit_is_create_btn:false,
      statusIoc: false,
      isEnabled: 1,
      licenceCount: 0,
      id_modules: 0,
      moduleIP: '',
      moduleName: '',
      dataTitle: ['moduleName', 'moduleIP', "licenceCount", "isEnabled"],
      dataList: {
        datalist: [
          {
          id_modules: 0,
          moduleName: 'No data',
          moduleIP: 'No data',
          licenceCount: 0,
          isEnabled: 0
        },
      ],
        itemsPerPage: 15,
        totalItems: 2
      }
    };
  }

  /***
   * 提交、修改 公司货币信息
   * Submit or modify the company's currency information 
   */
  btnHandleCommit = async () => {
    const { licenceCount, moduleName, moduleIP, isEnabled, id_modules } = this.state;
    let originalData = {
      isEnabled: isEnabled,
      licenceCount: licenceCount,
      moduleIP: moduleIP,
      moduleName: moduleName
    }
    // 当currency_id存在的时候是修改，并把id组装到originalData中
    // When the Currency_id exists, it is modified, and the ID is assembled in the OriginalData
    const formData = id_modules ? { ...originalData, id: id_modules } : originalData;
    const methodType = id_modules ? "PUT" : "POST";
    const response = await regModules(formData, methodType);
    const result = response.data;
    if (result.code === 200) {
      this.setState(prevState => ({
        listMsg: [...prevState.listMsg, { 'msg': result.msg, color: '#45C468' }],
        id_modules: result.data.id
      }));
      this.btnHandleEdit(false);
      
      this.ajaxCurrentList()
    } else {
      this.setState(prevState => ({
        listMsg: [...prevState.listMsg, { 'msg': result.msg, color: '#F44336' }],
      }));
    }
  }

  /**
   * 获取公司模块信息
   * Get the company's Modules information
   */
  ajaxCurrentList = async () => {
    const response = await regModules({}, 'GET');
    const result = response.data;
    if (result.code === 200 && Array.isArray(result.data)) {
      this.setState(prevState => ({
        dataList: {
          ...prevState.dataList,
          datalist: result.data
        }
      }));
    } else {
      console.log(result.msg)
    }
  }
  /**
   * 页面挂载完毕加载函数，执行初始化的动作
   * After the loading of the page, the loading function is completed, and the initialization action is performed
   */
  componentDidMount = () => {
    this.ajaxCurrentList()
  }

  /*********处理表数据 */
  handelChange = (even) => {
    const target = even.target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name;
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

  /**
   * 打开才能编辑，默认禁止编辑，防止误操作
   * You can edit only, and the editor is prohibited by default to prevent misunderstanding
   */
  btnHandleEdit = () => {
    this.state.statusIoc = !this.state.statusIoc
    if (this.state.statusIoc) {
      this.setState({
        is_edit: '',
      })
    } else {
      this.setState({
        is_edit: 'disabled',
      })
    }

  }
  tableCallback = (data,id) => {
    if (id) {
      console.log('table回调函数中出传到父级的值');
      this.setState({
        is_del: true,
        delete_id:id,
        del_data:data
      })
    } else {
      this.setState({
        edit_text: 'Edit',
        is_edit_is_create: "Update",
        is_edit_is_create_btn: true,
        isEnabled: data.isEnabled,
        licenceCount: data.licenceCount,
        id_modules: data.id_modules,
        moduleIP: data.moduleIP,
        moduleName: data.moduleName
      })
    }

  }

  delAction= async (state)=>{
    if(state===false){
      this.setState({
        is_del: false,
        delete_id:0,
        del_data:''
      })
    }else{
        const {delete_id}= this.state;
        console.log(delete_id)
        const FormData = {
          id:delete_id
        }
        const response = await regModules(FormData, 'DELETE');
        const result = response.data;
        if (result.code === 200) {
          this.setState((prevState) => ({
            listMsg: [...prevState.listMsg, { msg: result.msg, color: "#45C468" }], 
            is_del: false,
            delete_id:0,
            del_data:''
          }));
         this.ajaxCurrentList()
        } else {
          this.setState((prevState) => ({
            listMsg: [...prevState.listMsg, { msg: result.msg, color: "#F44336" }],
          }));
        }
    }
  }
  
  ChangeEditToCreate=()=>{
    this.setState({
      edit_text: 'Edit',
      is_edit_is_create:"Create",
      is_edit_is_create_btn:false,
      isEnabled: 0,
      licenceCount: 0,
      id_modules: 0,
      moduleIP: '',
      moduleName:''
    })
  }
    
  render() {
    const { is_edit,is_del, del_data,delete_id,dataTitle, dataList, edit_text,is_edit_is_create_btn, isEnabled, licenceCount, moduleIP, moduleName, listMsg, statusIoc } = this.state;
    return (
      <div className=" md:flex w-full px-8  bg-white rounded-lg">
        
        {is_del ? <DeleteModal deleteData={del_data}   delAction={this.delAction} /> : "" }
        <div className="space-y-12  w-1/3  mr-4 md:border-r-2 md:border-dashed">
          <div className=" border-gray-900/10  relative pb-12">
            <div className="md:absolute lg:absolute 2xl:absolute top-0  right-0 flex">
              {is_edit_is_create_btn ? <div className="px-2">
                <div
                  className={"text-sm cursor-pointer px-2.5 py-2   rounded  hover:border-customize-primary-1  bg-gradient-to-b from-customize-dark-42  to-customize-dark-19 transform rotate-15  text-white hover:bg-customize-dark-19"}
                  onClick={this.ChangeEditToCreate}
                >
                  <span className={`iconfont ${statusIoc ? ' icon-jinhangzhong' : 'icon-bianji2'}`}></span>
                  <span>Create</span>
                </div>
              </div>:" "} 
              <EditBtnCustomize btnText={edit_text} isEdit={is_edit} statusIoc={statusIoc} btnHandleEdit={this.btnHandleEdit} />
            </div>
            
            <div>{this.state.is_edit_is_create}</div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
              <div className="sm:col-span-2">
                <label htmlFor="companyPostalCode" className="block text-sm font-medium leading-6 text-customize-dark-19">  Module Name </label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 flex items-center  ">
                    <span className="iconfont icon-leixing px-4"></span>
                  </div>
                  <input
                    type="text"
                    onChange={this.handelChange}
                    disabled={is_edit}
                    name="moduleName"
                    value={moduleName}
                    id="moduleName"
                    autoComplete="address-level1"
                    className="block  rounded-md border-0 py-1.5 pl-14  text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-4  ">
                <label htmlFor="companyPostalCode" className="block text-sm font-medium leading-6 text-customize-dark-19">  moduleIP </label>
                <div className="mt-2 relative ">
                  <div className="absolute inset-y-0 left-0 flex items-center  ">
                    <span className="iconfont icon-leixing px-4"></span>
                  </div>
                  <input
                    type="text"
                    onChange={this.handelChange}
                    disabled={is_edit}
                    name="moduleIP"
                    value={moduleIP}
                    id="moduleIP"
                    autoComplete="address-level1"

                    className="block  rounded-md  border-0 py-1.5 pl-14 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="companyPostalCode" className="block text-sm font-medium leading-6 text-customize-dark-19">  licenceCount </label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 flex items-center  ">
                    <span className="iconfont icon-leixing px-4"></span>
                  </div>
                  <input
                    type="number"
                    onChange={this.handelChange}
                    disabled={is_edit}
                    name="licenceCount"
                    value={licenceCount}
                    id="licenceCount"
                    autoComplete="address-level1"
                    className="block  rounded-md focus:border-gray-500 -webkit-inner-spin-button -webkit-outer-spin-button border-0 py-1.5 pl-14  text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-4 ">
                <label htmlFor="currency_country" className="block text-sm font-medium leading-6 text-customize-dark-19">  isEnabled</label>
                <fieldset>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input id="isEnabled" name="isEnabled"
                          checked={isEnabled}
                          onChange={this.handelChange} type="checkbox" disabled={is_edit} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      </div>
                      <div className="text-sm leading-6">
                        {/* <label for="comments" class="font-medium text-gray-900">isEnabled</label> */}
                        <p className="text-gray-500 w-80">Click to open</p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
              {is_edit === '' ? <BtnCustomize btnText='Save' btnHandleCommit={this.btnHandleCommit} /> : ''}
            </div>
          </div>
        </div>
        <div className="lg: w-2/3" >
          <SearchBox   />
          <TableList dataList={dataList} dataTitle={dataTitle} callback={this.tableCallback}   isProhibitPage={true}  isDel={'id_modules'}/>
          <ErrorToast listdd={listMsg} upErrorListComback={this.upErrorList} />
        </div>
      </div>
    );
  }
}

export default ModulesSettings;
