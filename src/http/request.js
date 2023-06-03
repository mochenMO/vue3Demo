import axios from "axios";

//创建axios实例
const service=axios.create({
    baseURL:'http://api.jqrjq.cn/',
    timeout:6000
})


export default service;
