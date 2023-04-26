import React, { Component } from 'react';
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

  render() {
    const {dataList} = this.state;
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
                                <td className="px-6 py-4 whitespace-wrap  break-all" key={title_index}>
                                    {item[title_item]}
                                </td>
                            )
                        } )}
                        </tr>
                    </React.Fragment>
                    );
                })}
                </tbody>
                </table>
                {/* <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                        <div className="flex flex-1 justify-between sm:hidden">
                            <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                            <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                        </div>
                        <div className="hidden flex sm:flex sm:flex-1 sm:items-center sm:justify-between">
                            <div className='flex-none   w-80 '> 
                                    <p className="text-sm text-gray-700">
                                        Showing
                                        <span className="font-medium">1</span>
                                        to
                                        <span className="font-medium">10</span>
                                        of
                                        <span className="font-medium">97</span>
                                        results
                                    </p>
                            </div>
                            <div className='flex-grow text-right'>
                            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                <span className="sr-only">Previous</span>
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                                </svg>
                                </a>
                            
                                <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-gray-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                                <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                                <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                                <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                                <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                                <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                                <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                <span className="sr-only">Next</span>
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                </svg>
                                </a>
                            </nav>
                            </div>
                        </div>
                </div> */}
                <Pagination  totalItems={dataList.totalItems} itemsPerPage={dataList.itemsPerPage}/>
        </div>
    </div>
    );
  }
}

export default TableList;
