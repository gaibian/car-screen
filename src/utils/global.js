// 一些全局方法和属性 => 可以在vue组件之外调用
export default class Global {
    constructor() {
        this.name = 'xiaojun'
        this.newName = 'ssss'
    }
    hello(num) {
        let n = 0
        n += num
        return n
    }
}