import React, { Component } from "react";
import BtnCustomize from "../../components/common/btn";
import logo from '../../public/image/logo.png';
import { isNotEmpty, isNumber } from "../../utils/validataUnits";
import { regSetCompany } from "../../api";
import ErrorToast from "../../components/ErrorMessage";
import EditBtnCustomize from "../../components/common/btn_edit";


class CompanySettings extends Component {
  fileInput = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      listMsg: [],// error message
      is_edit: 'disabled',
      edit_text:'Edit',
      logo: logo, // initialize state variable to store the URL of the uploaded image
      file:'',
      companyName: '',
      companyPostalCode: '',
      companyCity: '',
      companyStreet1: '',
      companyStreet2: '',
    };
  }

  handleUploadClick = () => {
    this.fileInput.current.click();
  };

  btnHandleCommit = async () => {
    const { file, companyName, companyPostalCode, companyCity, companyStreet1, companyStreet2 } = this.state;
    if (!isNotEmpty(companyName)) {
      this.setState(prevState => ({
        listMsg: [...prevState.listMsg, { 'msg': 'companyName Can not be empty', color: '#F44336' }],
      }));
      return false;
    }
  // 提交带有文件的表单，利用FormData对象进行提交
 
  const formData = new FormData();
  formData.append('logo', file);
  formData.append('companyName', this.state.companyName);
  formData.append('companyPostalCode', this.state.companyPostalCode);
  formData.append('companyCity', this.state.companyCity);
  formData.append('companyStreet1', this.state.companyStreet1);
  formData.append('companyStreet2', this.state.companyStreet2);

    const response = await regSetCompany(formData);
    const result = response.data;
    if (result.code === 200) {
      this.setState(prevState => ({
        listMsg: [...prevState.listMsg, { 'msg': '设置公司信息成功！', color: '#45C468' }],
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
  handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const logo = URL.createObjectURL(file); // create URL for uploaded file
    this.setState({ logo ,file}); // update state with image URL
    // 处理上传文件的代码
  }; 
  btnHandleEdit = (isEditStatus)=>{
    console.log(isEditStatus)
    if(isEditStatus){
      this.setState({
        is_edit: '',
        edit_text:'editing'
      })
    }else{
      this.setState({
        is_edit:'disabled',
        edit_text:'Edit'
      })
    }
 
  }
  render() {
    const { logo,is_edit, edit_text,listMsg } = this.state;
    return (
      <div className="relative max-w-2xl px-8  bg-white rounded-lg">
          <div className="absolute top-0 right-0">
            
                <EditBtnCustomize  btnText={edit_text}  isEdit = {is_edit} btnHandleEdit={this.btnHandleEdit}/>
            </div>
        <div className="space-y-12">
          <div className=" border-gray-900/10 pb-12">
            
       

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-customize-dark-19">
                CompanyLogo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <div>
                  <img src={logo} alt="" className="rounded-full h-24 w-24" />
                </div>
                <button   disabled = {is_edit} className="rounded-md  bg-white px-2.5 py-1.5 text-sm font-semibold text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onClick={this.handleUploadClick}>Change</button>
                <input
                  type="file"
                  disabled = {is_edit}
                  ref={this.fileInput}
                  style={{ display: 'none' }}
                  onChange={this.handleFileInputChange}
                />
              </div>
            </div>


              <div className="sm:col-span-4">
                <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-customize-dark-19">
                  Company Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-customize-dark-19 sm:max-w-md">
                    <input
                      type="text"
                      disabled = {is_edit}
                      name="companyName"
                      id="companyName"
                      onChange={this.handelChange}
                      autoComplete="companyName"
                      className="block flex-1 border-0 bg-transparent py-1.5  pl-2 text-customize-dark-19 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="janesmith"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="companyCity" className="block text-sm font-medium leading-6 text-customize-dark-19">City</label>
                <div className="mt-2">
                  <input id="companyCity"
                    onChange={this.handelChange} 
                    disabled = {is_edit} name="companyCity" type="companyCity" autoComplete="companyCity" className="block w-full rounded-md border-0 py-1.5 pl-2 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                </div>
              </div>


              <div className="sm:col-span-2">
                <label htmlFor="companyPostalCode" className="block text-sm font-medium leading-6 text-customize-dark-19"> Postal Code</label>
                <div className="mt-2">
                  <input type="companyPostalCode"
                    onChange={this.handelChange}  
                    disabled = {is_edit} name="companyPostalCode" id="companyPostalCode" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 pl-2 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="companyStreet1" className="block text-sm font-medium leading-6 text-customize-dark-19">Street1 address</label>
                <div className="mt-2">
                  <input type="text" name="companyStreet1"
                    onChange={this.handelChange}  
                    disabled = {is_edit}  id="companyStreet1" autoComplete="companyStreet1s" className="block w-full rounded-md border-0 py-1.5 pl-2 text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="companyStreet2" className="block text-sm font-medium leading-6 text-customize-dark-19">Street2 address</label>
                <div className="mt-2">
                  <input type="text" name="companyStreet2"
                    onChange={this.handelChange} 
                    disabled = {is_edit} id="companyStreet2" autoComplete="companyStreet2" className="block w-full rounded-md border-0 py-1.5 pl-2  text-customize-dark-19 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-customize-dark-19 sm:text-sm sm:leading-6" />
                </div>
              </div>

              { is_edit === '' ?  <BtnCustomize btnText='Save' btnHandleCommit={this.btnHandleCommit} />  : ''}
              <ErrorToast listdd={listMsg} upErrorListComback={this.upErrorList} />
            </div>


            
          </div>
        </div>
      </div>
    );
  }
}

export default CompanySettings;
