// 一些全局方法和属性 => 可以在vue组件之外调用
export default class Global {
    constructor() {
        this.name = 'xiaojun'
        this.newName = 'ssss'
        // 点击按钮第一种需要等后端返回数据
        this.defalutLockOption = {
            lockDelay: 1000, //自动解锁时长,默认1000ms
            lockStatus: false, //全局锁的状态,所有操作都将会围绕它展开
            needAutoUnlock: true, //是否需要自动解锁，默认需要
            startTime: 0, // 开始锁定的时间
            endTime: 0  //解锁的时间
        }
        this.lockOption = {
            lockDelay: 1000, //自动解锁时长,默认1000ms
            lockStatus: false, //全局锁的状态,所有操作都将会围绕它展开
            needAutoUnlock: true, //是否需要自动解锁，默认需要
            startTime: 0, // 开始锁定的时间
            endTime: 0  //解锁的时间
        }
        this.eventLock = {}
    }
    // 对锁的状态进行重置 恢复默认
    reloadOption() {
        this.lockOption = Object.assign({},this.defalutLockOption)
    }
    // 
    hello(num) {
        let n = 0
        n += num
        return n
    }
}