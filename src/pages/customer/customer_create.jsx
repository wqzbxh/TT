import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import ErrorToast from '../../components/ErrorMessage';
import FormTitle from '../../components/common/form_title';
import CustomerInput from '../../components/common/customer_data_input';
class CreateCustomer extends Component {
    constructor(props) {
        super(props);
        // 初始状态为第一个菜单项选中
        this.state = {
          isVisible: false,
          listError: [],
        };
      }
      
  closeModal = () => {
    this.props.closeModal();
  };
  
  closeModalSon = () => {
     this.closeModal();
  };



 /************callbackProjectData */
 callbackCustomerData=()=>{

 }
  render() {
    const { listError } = this.state;
    const { isVisible } = this.props;
    if(!isVisible) return null
    return (
      <div className="fixed bg-black bg-opacity-50 inset-0 z-50 overflow-auto bg-black-transparen overflow-y-auto">
        <div className="flex items-center justify-center  h-3/4  mt-2 min-h-screen">
          <div className="relative h-5/6 text-gray-800 rounded-lg w-3/5">
           
            <div className="px-2 text-left">
                <div className="w-full  mx-auto">
                    <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                  <FormTitle closeModal={this.closeModalSon} />
                  <CustomerInput  callback={this.callbackCustomerData} />
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

export default CreateCustomer;
