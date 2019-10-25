import request from '../util/request';
// 登陆接口

// // 解密数据
// export let decrypt = params => {
//     return request.post('/user/decrypt', params)
// }
// 函数去抖
export function debounce(func, delay) {
    var timer = null;
    return function() {
        var context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            func.apply(context, args);
        }, delay);
    }
}