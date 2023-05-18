/**
 * 包含应用中所有接口请求函数
 */

// ajax('http://local.fr.com/login',{username:"admin",password:"admin123"},"POST")

import ajax from "./ajax";
const Host = ''
export const regCreateTimesheet = (data) => ajax(Host+'/create_timesheet',data,'POST')
export const regSetCompany= (data) => ajax(Host+'/set_company',data,'POST',true)
export const regTestlist= (data) => ajax(Host+'/test_list',data,'POST',true)

//请求登录接口
//Request login interface
export const regLogin = (username,password,login_ldap) => ajax('/login',{username,password,login_ldap},'POST')
//请求登出接口
//Request Logout interface
export const regLogout = () => ajax('/logout',{},'POST')
//设置公司信息 
//Set company information
export const regCompanySeting= (data,method) => ajax(Host+'/api/companysettings',data,method,false)
export const regImgUpload= (data,method) => ajax(Host+'/image/upload',data,method,true)

export const regCurrency= (data,method) => ajax(Host+'/api/currency',data,method,false)
// 公司mudoles信息接口
// Company Mudoles information interface
export const regModules= (data,method) => ajax(Host+'/api/modules',data,method,false)
//获取单个公司mudoles信息接口
//Get a single company Mudoles information interface
export const regGetModules= (data) => ajax(Host+'/api/modules/'+data,{},'GET',false)
//设置国家信息
//Set national information
export const regCountrySeting= (data,method) => ajax(Host+'/api/country',data,method,false)
//设置系统全局设置信息
//Set the system for system setting information
export const regGlobalSetting= (data,method) => ajax(Host+'/api/globalsettings',data,method,false)

// 设置公司分支信息
// Set the company branch information
export const regCostcenterSetting= (data,method) => ajax(Host+'/api/costcenter',data,method,false)
 
