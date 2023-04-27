import React, { Component } from 'react';
import PageTitle from '../../components/common/page_title';
import SearchBox from '../../components/common/search_box';
import ProjectList from '../../components/project/project_list';
import TableList from '../../components/common/table';
import CreateCustomer from './customer_create';
import CreateProjectBtn from '../../components/common/creater_project_btn';
import CreateProject from '../../components/project/project_create';

class Customer extends Component {
    constructor(props) {
        super(props);
        // 初始状态为第一个菜单项选中
        this.state = {
            isCustomerModal:false,
            isCreaterMedal: false,
            page_title:"Team",
            dataList:{
                title :['name','username',"eamil","role","info"],
                datalist:[{
                    name:'zhangSan',
                    email:'wqzbxh',
                    username:'wqzbxh@163.com',
                    role:"menange",
                    info:'this zhangsan   Info'
                },{
                    name:'Lisi',
                    email:'Lisiwqzbxh',
                    username:'Lisi@163.com',
                    role:"menange",
                    info:'this Lisi   Info'
                }],
                itemsPerPage:15,
                totalItems:2
            }
        };
      }
    /***********打开添加框 */
    handleCreateCustomer=()=>{
     this.setState({ isCustomerModal: true});
     
    }
       /***********关闭编辑框 */
   closeCustomerData=()=>{
    this.setState({
        isCustomerModal: false
    });
  }
  
/***********打开添加项目框 */
handleCreaterProject=()=>{
console.log(this.state.isCreaterMedal)
this.setState({ isCreaterMedal: true});

}
/***********关闭添加框 */
closeCreateProject=()=>{
 this.setState({
    isCreaterMedal: false
});
}
  render() {
    const {page_title,dataList,isCustomerModal,isCreaterMedal} = this.state;
    return (
        <div className="overflow-y-auto bg-white md:mx-auto  shadow-md  ">
                 
        <div className="border flex px-2  py-2 items-center justify-center  rounded-sm bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="flex-none  text-lg px-8 ">FILTER</div>

          <div className="relative inline-block border w-64">
            <select className="block w-full py-3 px-4 pr-8 leading-tight text-gray-700 bg-white rounded-lg appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-500">
              <option className="bg-transparent border-0" value="1">
                Active
              </option>
              <option className="bg-transparent border-0" value="2">
                Archived
              </option>
              <option className="bg-transparent border-0" value="3">
                All
              </option>
            </select>
          </div>

          
          <div className="flex-grow px-8  ">
            <input
              className="px-4 py-3 rounded-lg w-full border  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              placeholder="请输入内容"
            />
          </div>
          <div className="rounded-2xl px-2">
            <div className="text-bluegray-700 text-sm px-2.5 py-2 border border-blue-200  hover:border-dashed  hover:bg-blue-50  hover:">
                <span className="iconfont icon-chaxun1"></span> &nbsp;&nbsp;  Apply filter
            </div>
          </div>

          <div className="rounded-2xl px-2" onClick={this.handleCreateCustomer} >
            <div className="text-bluegray-700 text-sm px-2.5 py-2 border border-blue-200  hover:border-dashed  hover:bg-blue-50  hover:">
                <span className="iconfont icon-xinzeng5"></span> &nbsp;&nbsp;  Add Customer
            </div>
          </div>
        </div>
            <CreateCustomer isVisible={isCustomerModal}  closeModal={this.closeCustomerData} />
            
            <TableList dataList = {dataList} createProjectBtn={<CreateProjectBtn  />}/>
        </div>    
    );
  }
}

export default Customer;
