import React, { Component } from 'react';
import CreateProjectBtn from './creater_project_btn';
import Pagination from './pagination';

class TableList extends Component {

  state={
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
        },],
        itemsPerPage:10,
        totalItems:100
    }
  }
    /***********打开添加项目框 */
    handleCreaterProject=()=>{
        console.log(5)
        this.props.show()
     }
  render() {
    const {dataList} = this.props;
    console.log(dataList.title)

    return (
    <div className="overflow-y-auto md:mx-auto  rounded-md  shadow-md">
        <div className="py-3"></div>
        <div className="overflow-x-auto bg-white ">
            <table className="text-left table-auto min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className="  text-xs">
                    {dataList.title.map((title_item, title_index) =>{
                         return ( <th  scope="col" key={title_index}    className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider" >{title_item}  </th>)
                    } ) } 
                    </tr>
                </thead>
                <tbody className="divide-y text-sm  font-extralight  divide-gray-200">
                {dataList.datalist.map((item, index) => {
                    return (
                    <React.Fragment key={index}>
                        <tr>
                        {dataList.title.map((title_item, title_index) =>{
                            return (
                                <td className="px-6 py-3 whitespace-wrap  break-all" key={title_index}>
                                    {item[title_item]}
                                </td>
                            )
                        } )} 
                        <td>
                            {this.props.createProjectBtn ?  this.props.createProjectBtn : ''}
                        </td>
                        </tr>
                    </React.Fragment>
                    );
                })}
                </tbody>
                </table>
             
                <Pagination  totalItems={dataList.totalItems} itemsPerPage={dataList.itemsPerPage}/>
        </div>
    </div>
    );
  }
}

export default TableList;
