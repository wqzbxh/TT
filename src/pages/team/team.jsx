import React, { Component } from 'react';
import PageTitle from '../../components/common/page_title';
import SearchBox from '../../components/common/search_box';
import ProjectList from '../../components/project/project_list';
import TableList from '../../components/common/table';

class Team extends Component {
    constructor(props) {
        super(props);
        // 初始状态为第一个菜单项选中
        this.state = {
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
                },{
                    name:'Lisi',
                    email:'Lisiwqzbxh',
                    username:'Lisi@163.com',
                    role:"menange",
                    info:'this Lisi   Info'
                },{
                    name:'Lisi',
                    email:'Lisiwqzbxh',
                    username:'Lisi@163.com',
                    role:"menange",
                    info:'this Lisi   Info'
                },{
                    name:'Lisi',
                    email:'Lisiwqzbxh',
                    username:'Lisi@163.com',
                    role:"menange",
                    info:'this Lisi   Info'
                },{
                    name:'Lisi',
                    email:'Lisiwqzbxh',
                    username:'Lisi@163.com',
                    role:"menange",
                    info:'this Lisi   Info'
                },{
                    name:'Lisi',
                    email:'Lisiwqzbxh',
                    username:'Lisi@163.com',
                    role:"menange",
                    info:'this Lisi   Info'
                },{
                    name:'Lisi',
                    email:'Lisiwqzbxh',
                    username:'Lisi@163.com',
                    role:"menange",
                    info:'this Lisi   Info'
                },{
                    name:'Lisi',
                    email:'Lisiwqzbxh',
                    username:'Lisi@163.com',
                    role:"menange",
                    info:'this Lisi   Info'
                },{
                    name:'Lisi',
                    email:'Lisiwqzbxh',
                    username:'Lisi@163.com',
                    role:"menange",
                    info:'this Lisi   Info'
                },{
                    name:'Lisi',
                    email:'Lisiwqzbxh',
                    username:'Lisi@163.com',
                    role:"menange",
                    info:'this Lisi   Info'
                },{
                    name:'Lisi',
                    email:'Lisiwqzbxh',
                    username:'Lisi@163.com',
                    role:"menange",
                    info:'this Lisi   Info'
                },{
                    name:'Lisi',
                    email:'Lisiwqzbxh',
                    username:'Lisi@163.com',
                    role:"menange",
                    info:'this Lisi   Info'
                },{
                    name:'Lisi',
                    email:'Lisiwqzbxh',
                    username:'Lisi@163.com',
                    role:"menange",
                    info:'this Lisi   Info'
                },{
                    name:'Lisi',
                    email:'Lisiwqzbxh',
                    username:'Lisi@163.com',
                    role:"menange",
                    info:'this Lisi   Info'
                },],
                itemsPerPage:15,
                totalItems:8900
            }
        };
      }
  render() {
    const {page_title,dataList} = this.state;
    return (
        <div className="overflow-y-auto bg-white md:mx-auto  shadow-md  ">
            <SearchBox />
            <TableList dataList = {dataList}/>
        </div>    
    );
  }
}

export default Team;
