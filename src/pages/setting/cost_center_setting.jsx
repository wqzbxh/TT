import React, { Component } from "react";
import BtnCustomize from "../../components/common/btn";
import { isNotEmpty, isNumber } from "../../utils/validataUnits";
import { regSetCompany } from "../../api";
import ErrorToast from "../../components/ErrorMessage";
import EditBtnCustomize from "../../components/common/btn_edit";
import TableList from "../../components/common/table";
import SearchBox from "../../components/common/search_box";
import CreateCostCenterBtn from "../../components/common/creater_cost_center_btn";


class CostCenterSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMsg: [],// error message
      is_edit: 'disabled',
      edit_text: 'Edit',
      dataList:{
        title :['name','street1',"street2","postalCode","city"],
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
    const response = await regSetCompany(formData);
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

  btnHandleEdit = (isEditStatus) => {
    console.log(isEditStatus)
    if (isEditStatus) {
      this.setState({
        is_edit: '',
        edit_text: 'editing',
      })
    } else {
      this.setState({
        is_edit: 'disabled',
        edit_text: 'Edit'
      })
    }

  }
  render() {
    const { is_edit, edit_text, listMsg,dataList } = this.state;
    return (
      <div className="relative max-w-6xl px-2 bg-white rounded-lg">
        {/* <div className="absolute top-0 right-0">
          <EditBtnCustomize btnText={edit_text} isEdit={is_edit} btnHandleEdit={this.btnHandleEdit} />
        </div> */}
        <div className="space-y-12">
          <div className=" border-gray-900/10 pb-12">
                
              <SearchBox  createCreateCostCenterBtn={<CreateCostCenterBtn />}/>
               <TableList dataList = {dataList}   />
              {is_edit === '' ? <BtnCustomize btnText='Save' btnHandleCommit={this.btnHandleCommit} /> : ''}
              <ErrorToast listdd={listMsg} upErrorListComback={this.upErrorList} />
          
          </div>
        </div>
      </div>
    );
  }
}

export default CostCenterSettings;
