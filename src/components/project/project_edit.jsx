import React, { Component } from 'react';
import CustomerInput from '../common/customer_data_input';
import FormTitle from '../common/form_title';
import IndividualInvoicesPerOrder from '../common/Iidividual_invoices_per_order';
import ProjectInput from '../common/project_data_input';
import ErrorToast from '../ErrorMessage';

class EditProject extends Component {
    constructor(props) {
        super(props);
        // 初始状态为第一个菜单项选中
        this.state = {
          text: "",
          isVisible: false,
          listError: [],
          individualDataList: [
            {
                bill_type: "2",
                Date_of_invoice: "21321",
                distributionfe: "",
                currency: "",
                Exchange: "",
              },
          ],
        };
      }
      
    closeModal = () => {
        this.props.closeModal();
      };
      
    closeModalSon = () => {
         this.closeModal();
      };
  /***************增加一条可以填写的记录 */
  addRecord =()=>{
        this.setState((prevState)=>({
            project_data:{
              title:"Edit Project"
            },
            individualDataList:[
                ...prevState.individualDataList,{
                    bill_type: "4",
                    Date_of_invoice: "",
                    distributionfe: "",
                    currency: "",
                    Exchange: "",
                }
            ]
        }))
  }
  /******************删除记录 */
  handleRemoveRecord=(index)=>{
        if(this.state.individualDataList.length < 2){
            return false;
        }
        this.setState((prevState)=>({
            individualDataList:prevState.individualDataList.filter( (item,olderIndex) => olderIndex !== index)
        }))}
 /************************选择 */
 handleChange=(event,index)=>{
    const {name,value} = event.target;
    this.setState((prevState)=>({
        individualDataList:prevState.individualDataList.map((olderRecord,oldIndex)=>{
            if(oldIndex === index){
                olderRecord[name]=value
                return { ...olderRecord }
            }
          return olderRecord;
        }) 
    }))
 }
 /************callbackProjectData */
 callbackProjectData=()=>{
      
 }
 
 /************callbackIndividualInvoicesPerOrderData */
 callbackIndividualInvoicesPerOrderData=()=>{

 }
 /************callbackCustomerData */
 callbackCustomerData=()=>{

 }
 
  render() {
    const { listError } = this.state;
    const { isVisible } = this.props;
    if(!isVisible) return null;
    return (
      <div className="fixed bg-black bg-opacity-70 inset-0 z-50 overflow-auto bg-black-transparen overflow-y-auto">
        <div className="flex  items-center justify-center h-3/4  mt-2 min-h-screen">
          <div className="relative rounded-lg h-5/6 text-gray-800 rounded-lg w-4/5">
            
            <div className="px-2 text-left">
                    <div className="w-full  mx-auto">
                      <form className="bg-white  rounded-lg px-8 pt-6 pb-8 mb-4">
                       <FormTitle closeModal={this.closeModalSon} />
                       <ProjectInput callback={this.callbackProjectData}/>
                       {/* <CustomerInput  callback={this.callbackCustomerData} /> */}
                       <IndividualInvoicesPerOrder  callback={this.callbackIndividualInvoicesPerOrderData} /> 
               
                </form>
              </div>
            </div>
            {/* 内容 */}
          </div>
        </div>
        {/* 信息提示 */}
        <div>
          <ErrorToast
            listdd={listError}
            upErrorListComback={this.upErrorList}
          />
        </div>
      </div>
    );
  }
}

export default EditProject;
