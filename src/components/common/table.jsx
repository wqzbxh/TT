import React, { Component } from 'react';
import CreateProjectBtn from './creater_project_btn';
import Pagination from './pagination';

class TableList extends Component {

  state={
    selectedRows:[],
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
     toggleSelectAll = () => {
        const { datalist } = this.props.dataList;
        const { selectedRows } = this.state;
        console.log(selectedRows,datalist)
        if (selectedRows.length === datalist.length) {
          this.setState({ selectedRows: [] });
        } else {
          this.setState({ selectedRows: [...datalist] });
        }
      };
    
      toggleSelectRow = row => {
        const { selectedRows } = this.state;
        const index = selectedRows.findIndex(selectedRow => selectedRow === row);
        if (index === -1) {
          this.setState({ selectedRows: [...selectedRows, row] });
        } else {
          selectedRows.splice(index, 1);
          this.setState({ selectedRows });
        }
      };
  render() {
    const {dataList} = this.props;
    const { selectedRows } = this.state;
    console.log('************')
    console.log(selectedRows.includes(0))
    console.log(selectedRows.includes(0))
    return (
    <div className="overflow-y-auto md:mx-auto  rounded-md  shadow-md">
        <div className="py-3"></div>
        <div className="overflow-x-auto bg-white ">
            <table className="text-left table-auto min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className="font-semibold">
                         <td className='px-2'>    
                            <input type="checkbox"  checked={selectedRows.length === dataList.datalist.length} onChange={this.toggleSelectAll}   className="h-4 w-4 border-gray-700 rounded text-gray-900 focus:outline-none focus:border-gray-900" />
                        </td>
                    {dataList.title.map((title_item, title_index) =>{
                         return ( <th  scope="col" key={title_index}    className="px-6 py-3 text-left text-sm  text-gray-600 uppercase tracking-wider" >{title_item}  </th>)
                    } ) } 
                    </tr>
                </thead>
                <tbody className="divide-y text-sm  font-extralight  divide-gray-200">
                {dataList.datalist.map((item, row) => {
                    return (
                    <React.Fragment key={row}>
                        <tr>
                            <td className='px-2'>    
                              <input type="checkbox" checked={selectedRows.includes(dataList.datalist[row])}  onChange={() => this.toggleSelectRow(dataList.datalist[row])} id="is_ldap" name="is_ldap" className="h-4 w-4 px-2 border-gray-700 rounded text-gray-900 focus:outline-none focus:border-gray-900" />
                            </td>
                            
                        {dataList.title.map((title_item, title_index) =>{
                            return (
                                <td className="px-6 py-3 whitespace-wrap  break-all" key={title_index}>
                                    {item[title_item]}{row}{selectedRows.includes(dataList.datalist[row])}
                                </td> 
                            )
                        } )} 
                        <td className='flex'>
                            {this.props.createProjectBtn ?  this.props.createProjectBtn : ''}
                            {this.props.projectListBtn ?  this.props.projectListBtn : ''}
                            
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
