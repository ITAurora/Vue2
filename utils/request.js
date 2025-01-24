import axios from "axios";

//封装对应的get请求
const get = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { params })
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
}
//封装对应的post请求
const post = (url, param) => {
    return new Promise((resolve, reject) => {
        axios.post(url, param)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
}
export default {
    get,
    post
}
