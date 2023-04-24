/**
 * 发送异步请求的函数ajax
 * 
 */
import axios from "axios";
import memoryUtils from "../utils/memoryUtils";

export default function ajax(url,data = {},type='GET'){
    const token = memoryUtils.user.token;
    return new Promise((resolve,reject)=>{
        let promise;
        if(type === 'GET'){//发送GET请求
            promise = axios.get(url,{params:data});
         }else if(type ==='POST'){//发送POST请求
            promise =  axios.post(url,data,{
               headers:{
                  'Token':token,
                  'Content-Type': 'application/json'
               },
            })
         }
         promise.then(response=>{
            resolve(response);
         }).catch(error=>{
            resolve(error);
         })
    })
    
}


