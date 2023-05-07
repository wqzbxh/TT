import React, { Component } from 'react';
import SearchBox from '../../components/common/search_box';
import TableList from '../../components/common/table';
import Edit from '../../components/common/batch_processing';
import { regTestlist } from "../../api";
import CreateTeamUserBtn from '../../components/common/creater_team_user_btn';
import CreateTeamUserRoleBtn from '../../components/common/creater_team_user_role_btn';
import SearchInput from '../../components/common/search_input';
import SearchActiveSelect from '../../components/common/search_active';

class Team extends Component {
    constructor(props) {
        super(props);
        // 初始状态为第一个菜单项选中 参数
        this.state = {
            page_title:"Team",
            listMsg: [],// error message
            tableParameter:{
                start:1,
                length:15,
                search:'',
                startTime:'',
                endTime:'',
                order:{
                    value:'',
                    order:'desc'
                },
            },
            dataTitle : ['name','email','username','role','info'],
            dataList:{
                datalist:[],
                itemsPerPage:15,
                totalItems:8900
            }
        };
      }
    searchDataCallback=(value)=>{
        console.log(value)
        this.state.tableParameter.search = value;
        this.ajaxList()
    }
    ajaxList = async () =>{
        const {tableParameter} = this.state;
        const response = await regTestlist(tableParameter);
        const result = response.data;
        if (result.code === 200) {
            this.setState({
                dataList:result.data
            })
        } else {
            console.log(result.msg)

        }
    }
    componentDidMount =  () => {
        this.ajaxList()
    }
    handlePageCallback =(page)=>{
       this.state.tableParameter.start = page;
       this.ajaxList()
    }
  render() {
    const {dataTitle,dataList} = this.state;
    return (
        <div className="overflow-y-auto bg-white md:mx-auto  shadow-md  ">
            <SearchBox  edit={<Edit />}  createCreateTeamUserBtn={<CreateTeamUserBtn />} createCreateTeamUserRoleBtn ={<CreateTeamUserRoleBtn />} searchInput={<SearchInput searchDataCallback={this.searchDataCallback} /> } searchActiveSelect={<SearchActiveSelect /> }/>
            <TableList dataList = {dataList}  dataTitle={dataTitle} handlePageCallback={this.handlePageCallback}/>
        </div>    
    );
  }
}

export default Team;
