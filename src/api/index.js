/**
 * 包含应用中所有接口请求函数
 */

// //请求登录接口
// ajax('http://local.fr.com/login',{username:"admin",password:"admin123"},"POST")

import ajax from "./ajax";
const Host = ''

export const regLogin = (username,password,login_ldap) => ajax(Host+'/login',{username,password,login_ldap},'POST')
export const regLogout = () => ajax(Host+'/logout',{},'POST')
export const regCreateTimesheet = (data) => ajax(Host+'/create_timesheet',data,'POST')
//设置公司信息 Set company information
export const regSetCompany= (data) => ajax(Host+'/set_company',data,'POST',true)
 
