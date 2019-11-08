// api接口统一的出口

//登录模块接口
import login from './module/login'
//急救首页模块
import aidIndex from './module/aidIndex'

// 获取数据
import getData from './module/dashboard'

export default {
    login,
    aidIndex,
    getData
}

