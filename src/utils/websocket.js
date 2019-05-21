
// 需要用promise来封装
class webSocket {
    constructor() {
        this.webSocket = null
        this.webSocketInit()
    }
    webSocketInit() {
        // 初始化webSocket,并开始监听回调消息 =>开始建立连接 => 由后端来实时推送消息
        this.webSocket = new WebSocket('url')
        this.webSocket.onmessage = this.webSocketMessage
    }
    webSocketMessage(res) {
        // 接收消息
        console.log(res.data)
        console.log(JSON.parse(res.data))
    }
    webSocketSend(data) {
        // 发送消息
        this.webSocket.send(JSON.stringify(data))
    }
    readyChat(data) {
        if(this.webSocket.readyState === 1) { //连接成功,可以立即发送消息

        }else if(this.webSocket.readyState === 0) {  // 表示正在连接

        }else{  //连接失败或是未连接

        }
    }
}

export default webSocket