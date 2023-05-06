import store from 'store'
const USER_KEY = 'user_key'
const PATH_KEY = 'Path'
/*包含 n 个操作 local storage 的工具函数的模块
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    saveUser(user) {
        // localStroage 只能保存 string, 如果传递是对象, 会自动调用对象的 toString()并保存
        //localStorage.setItem(USER_KEY, JSON.stringify(user)) // 保存的必须是对象的 json 串
        store.set(USER_KEY, user) // 内部会自动转换成 json 再保存
    },
    getUser() { // 如果存在, 需要返回的是对象, 如果没有值, 返回{}
        // return JSON.parse(localStorage.getItem(USER_KEY) || '{}') // [object, Object]
        return store.get(USER_KEY) || {}
    },
    removeUser() {
        // localStorage.removeItem(USER_KEY)
        store.remove(USER_KEY)
    },
    savePath(pathName){
        //保存路径,用于刷新时网址路径不是菜单栏的时候
        let pathData = {};
        if(store.get(PATH_KEY)){
            pathData =  store.get(PATH_KEY)
            pathData = { ...pathData,...pathName};
        }else{
            pathData = pathName
        }
        store.set(PATH_KEY,pathData)
    },
    getPath(){
        return store.get(PATH_KEY) || {}
    }
}
