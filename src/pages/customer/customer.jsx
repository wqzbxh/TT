import React, { Component } from 'react';
import PageTitle from '../../components/common/page_title';
import SearchBox from '../../components/common/search_box';
import ProjectList from '../../components/project/project_list';
import TableList from '../../components/common/table';
import CreateCustomer from './customer_create';
import CreateProjectBtn from '../../components/common/creater_project_btn';
import CreateProject from '../../components/project/project_create';
import ProjectListBtn from '../../components/project/project_list_btn';
import Edit from '../../components/common/batch_processing';
import CreateCustomerBtn from '../../components/common/creater_customer_btn';

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
             <SearchBox  edit={<Edit />}  createCustomerBtn={<CreateCustomerBtn />} />
         
            
            <TableList dataList = {dataList} createProjectBtn={<CreateProjectBtn  />}  projectListBtn = {<ProjectListBtn />}/>
        </div>    
    );
  }
}

export default Customer;
