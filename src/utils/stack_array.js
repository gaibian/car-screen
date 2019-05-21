
//堆栈 js 实现 后进先出 => 可以用数组数据格式来实现

// push(element(s)): 此方法将新添加的元素添加至堆栈的顶部
// pop():此方法删除栈顶的元素，同时返回已删除的元素
// peek(): 返回堆栈的顶部元素
// isEmpty(): 判断堆栈是否为空，如果为空，返回True, 否则返回False。
// clear(): 清空堆栈所有的元素。size(): 此方法返回堆栈元素的数量，类似数组的长度。
// toArray(): 以数组的形式返回堆栈的元素。
// toString()：以字符串的形式输出堆栈内容。

export default class StackArray {
    constructor() {
        this.items = [];
        this.init();
    }
    init() {
        let symbol = Symbol('前端达人') // 前端达人描述
        console.log(symbol)  //完全是独一无二的值 但是是按值引用的
        let obj = {
            [symbol]:'新的值' // 定义完全私有化的值 => 受保护的类型
        }
        console.log(obj[symbol])
    }
    // 向栈的顶部添加数据 => 添加到数组的尾部 也是栈的顶部
    push(element) {
        this.items.push(element)
    }
    // 删除栈顶的元素 并且返回删除的元素
    pop() {
        if(!this.isEmpty()) {
            return this.items.pop()
        }  
    }
    // 获取堆栈最后一个元素
    peek() {
        if(!this.isEmpty()) {
            return this.items[this.items.length - 1]
        }
    }
    // 判断堆栈是否为空
    isEmpty() {
        return this.items.length === 0
    }
    // 堆栈的长度
    size() {
        return this.items.length
    }
    // 清空堆栈
    clear() {
        this.items = []
    }
    toArray() {
        return this.items;
    }

    toString() {
        return this.items.toString();
    }
}