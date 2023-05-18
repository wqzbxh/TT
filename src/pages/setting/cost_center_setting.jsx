import React, { Component } from "react";
import BtnCustomize from "../../components/common/btn";
import { isNotEmpty, isNumber } from "../../utils/validataUnits";
import { regCostcenterSetting } from "../../api";
import ErrorToast from "../../components/ErrorMessage";
import EditBtnCustomize from "../../components/common/btn_edit";
import TableList from "../../components/common/table";
import SearchBox from "../../components/common/search_box";
import CreateCostCenterBtn from "../../components/common/creater_cost_center_btn";
import EditCostCenter from "./cost_center_edit";
import DeleteModal from "../../components/common/delete_modal";


class CostCenterSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listMsg: [],// error message
      is_edit: 'disabled',
      is_edit_status:false,
      is_del:false,
      delete_id:0,
      edit_text: 'Edit',
      current_data:'',//当前一行的值 The current line data
      dataTitle : ['name','street1',"street2","postalCode","city"],
      dataList:{
        datalist:[{
            name:'Google LLC',
            street1:'600 Amphitheatre Parkway',
            street2:" Mountain View, CA 94043, USA",
            postalCode:'94043',
            city:'Mountain View'
        },{
          name:'Facebook, Inc.',
          street1:'1 Hacker Way',
          street2:" Menlo Park, CA 94025, USA",
          postalCode:'94025',
          city:'Menlo Park'
        }],
        itemsPerPage:15,
        totalItems:2
    }
    };
  }
  btnHandleCommit = async () => {
    const { licenceCount, moduleName, moduleIP,isEnabled } = this.state;
    let formData = {
      isEnabled: isEnabled,
      licenceCount: licenceCount,
      moduleIP: moduleIP,
      moduleName: moduleName,
    }
    const response = await regCostcenterSetting(formData);
    const result = response.data;
    if (result.code === 200) {
      this.setState(prevState => ({
        listMsg: [...prevState.listMsg, { 'msg': '设置Modules信息成功！', color: '#45C468' }],
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

  /**
   * 获取公司分支中心配置信息
   * Get the configuration information of the company branch center
   */
  ajaxCurrentList = async () => {
    const response = await regCostcenterSetting({}, 'GET');
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
  closeModal=()=>{
    this.setState({
      is_edit_status: false
    })
  }
  /**
   * 页面挂载完毕加载函数，执行初始化的动作
   * After the loading of the page, the loading function is completed, and the initialization action is performed
   */
  componentDidMount = () => {
    this.ajaxCurrentList()
  }
  tableCallback = (data,id,statue) => {
    if(statue=='update'){
      this.setState({
        current_data:data,
        is_edit_status: true
      })
    }else if(statue=='delete'){
      this.setState({
        current_data:data,
        delete_id: id,
        is_del:true
      })
    }
  
  }
  
  delAction= async (state)=>{
    if(state===false){
      this.setState({
        is_del: false,
        delete_id:0,
        current_data:''
      })
    }else{
        const {delete_id}= this.state;
        console.log(delete_id)
        const FormData = {
          id:delete_id
        }
        const response = await regCostcenterSetting(FormData, 'DELETE');
        const result = response.data;
        if (result.code === 200) {
          this.setState((prevState) => ({
            listMsg: [...prevState.listMsg, { msg: result.msg, color: "#45C468" }], 
            is_del: false,
            current_data:0,
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
  render() {
    const { is_edit,is_del, is_edit_status,dataTitle, listMsg,dataList,current_data} = this.state;
    return (
      <div className="relative max-w-6xl px-2 bg-white rounded-lg">
        {/* <div className="absolute top-0 right-0">
          <EditBtnCustomize btnText={edit_text} isEdit={is_edit} btnHandleEdit={this.btnHandleEdit} />
        </div> */}
        <div className="space-y-12">
          <div className=" border-gray-900/10 pb-12">
              <SearchBox  createCreateCostCenterBtn={<CreateCostCenterBtn Refresh={this.ajaxCurrentList}/>}/> 
              <TableList dataList = {dataList} dataTitle={dataTitle} callback={this.tableCallback}  isProhibitAllSelect="true"  isProhibitPage="true"   isDel={'id_costcenter'} isUpdate='true' />
         
               {is_edit_status ? <EditCostCenter isVisible={is_edit_status} closeModal={this.closeModal} currentData={current_data} Refresh={this.ajaxCurrentList}/>  : '' }
            
               {is_del ? <DeleteModal deleteData={current_data}   delAction={this.delAction} /> : "" }
              <ErrorToast listdd={listMsg} upErrorListComback={this.upErrorList} />

          </div>
        </div>
      </div>
    );
  }
}

export default CostCenterSettings;
