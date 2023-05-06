/**
 * 发送异步请求的函数ajax
 * 
 */
import axios from "axios";
import memoryUtils from "../utils/memoryUtils";

export default function ajax(url,data = {},type='GET',isContainsFiles = false){
   
   console.log(1)
    const token = memoryUtils.user.token;
    return new Promise((resolve,reject)=>{
        let promise;

        //发送GET请求
        //send GET request
        if(type === 'GET'){
            promise = axios.get(url,{params:data});
            //发送POST请求
            //Send POST request
         }else if(type ==='POST'){
            // 默认application/json方式提交
            // Submit by default application/json
            let config = {
               headers:{
                  'Token':token,
                  'Content-Type': 'application/json'
               }
             }; 
            //  文件提交
            // file submission
            if(isContainsFiles === true){
                config = {
                  headers: {
                     'Token':token,
                     'content-type': 'multipart/form-data' }
                }; 
            }
            
            promise =  axios.post(url,data,config)
         }
         promise.then(response=>{
            resolve(response);
         }).catch(error=>{
            resolve(error);
         })
    })
    
}


