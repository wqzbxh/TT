import React, { Component, useRef  ,useState } from "react";
import logo from '../../public/image/logo.png';
import ErrorToast from "../../components/ErrorMessage";
import { Link ,useNavigate } from "react-router-dom";
import { isValidPassword, isValidUsername } from "../../utils/validataUnits";
import '../../api'
import { regLogin } from "../../api";
import memoryUtils from "../../utils/memoryUtils";
import localstorageUnits from "../../utils/localstorageUnits";

export const withNavigation = (Component) => {
    return (props) => <Component {...props} navigate={useNavigate()} />;
};
class Login extends Component {
    /***********************构造函数初始化 */
    constructor(props) {
        super(props);
        this.state = {
            listD: [],
            username:'haiyang',
            password:'admin123',
            is_ldap:false,
            is_remember:false,
            is_commit_ajax:true,
            color: "#000000"
        };
    }
    
    /***********************随机生成颜色，测试提示信息颜色 */
    getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    /***********************错误信息提示时，接收错误信息提示组件中每次销毁后单个错误信息的新数组，避免当有新的信息提示出现时，又全部加载 */
    upErrorList = (newErroeList) => {
        this.setState({
            listD: newErroeList
        });
    }

    /***********************点击 */
    handleButtonClick = async (event) => {
        
        event.preventDefault();
        const { username,password,is_ldap,is_remember,is_commit_ajax } = this.state;
        if (!isValidUsername(username)) {
            this.setState(prevState => ({
                listD: [...prevState.listD, { 'msg': '账号有问题@组成', color: this.getRandomColor() }],
                is_commit_ajax:false
            }));
            return false;
        }
        
        if (!isValidPassword(password)) {
            this.setState(prevState => ({
                listD: [...prevState.listD, { 'msg': '密码8-16的数字大小写字母下划线@组成', color: this.getRandomColor() }],
                is_commit_ajax:false
            }));
            return false;
        }
         if(is_commit_ajax){
            const response = await  regLogin(username,password,is_ldap);
            const result = response.data;
            if(result.code === 200){
                const username = result.data;
                memoryUtils.user = username; 
                localstorageUnits.saveUser(username)
                this.props.navigate('/tracker');
            }else{
                //登陆失败
                console.log(result.msg)
                this.setState(prevState => ({
                    listD: [...prevState.listD, { 'msg':result.msg, color: this.getRandomColor() }],
                }));
            }
         }
        console.log(is_commit_ajax)
        if(!isValidUsername(username)){
            // result = true;
        }
       
    };

    /*********处理表数据 */
    handelChange=(even)=>{
        const target = even.target;
        const value = target.type === 'checkbox'  ? target.checked : target.value
        const name = target.name;
        console.log(name,value)
        this.setState({
            [name]:value
        })
    }
    
    onBlur = (event) => {
        const { name,value } = event.target;
        console.log(name);

        this.setState({
             is_commit_ajax:true
        })
      };
    

    render() {
        const { listD,username,password,is_ldap,is_remember } = this.state;
        return (
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src={logo} alt="logo" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9  tracking-tight text-gray-700">Sign in to your  account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="max-w-md mx-auto">
                        <div className="mb-6">
                            <input value={username}  type="text" id="username" onChange={this.handelChange}  onBlur={this.onBlur}  name="username" className="w-full border-b-2 border-gray-400 py-2 px-3 text-gray-700 font-medium placeholder-transparent focus:outline-none focus:border-gray-900" placeholder="Username" required />
                        </div>

                        <div className="mb-6">
                            <input type="password"  value={password}  id="password" onBlur={this.onBlur} onChange={this.handelChange}  name="password" className="w-full border-b-2 border-gray-400 py-2 px-3 text-gray-700 font-medium placeholder-transparent focus:outline-none focus:border-gray-900" placeholder="Password" required />
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center mb-6">
                                <input type="checkbox" checked={is_ldap}  onChange={this.handelChange} id="is_ldap" name="is_ldap" className="h-4 w-4 border-gray-700 rounded text-gray-900 focus:outline-none focus:border-gray-900" />
                                <label htmlFor="is_ldap" className="ml-2  text-sm  text-gray-700 underline ">LADP </label>
                                <div className="mx-4 h-6 border-blue-400"></div>
                                <input type="checkbox" id="is_remember" name="is_remember" checked={is_remember}  onChange={this.handelChange} className="h-4 w-4 border-gray-700 rounded text-gray-900 focus:outline-none focus:border-gray-900" />
                                <label htmlFor="is_remember" className="ml-2 text-gray-700 font-medium underline">Remember Me</label>
                            </div>

                        </div>

                        <div>
                            <button onClick={this.handleButtonClick} type="submit" className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">  Sign in</button>
                        </div>
                    </form>
                    
                    <p className="mt-10 text-center text-sm text-gray-800">
                        TimeTrack
                        <span className="font-semibold leading-6 text-gray-600 hover:text-gray-900"> &nbsp; Start Your record</span>
                    </p>
                </div>
                {/* 信息提示 */}
                <div>
                    <ErrorToast listdd={listD} upErrorListComback={this.upErrorList} />
                </div>
            </div>
        );
    }
}
const Wrapped = withNavigation(Login)

export default Wrapped