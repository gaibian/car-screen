import ReconnectingWebSocket from 'reconnecting-websocket'
import { Message } from 'element-ui'
// 需要用promise来封装
class webSocket {
  constructor(url,callback) {
    this.webSocket = null
    this.url = url;
    this.callback = callback;
    this.webSocketInit(this.url,callback)
  }
  webSocketInit(url,callback) {
    // 初始化webSocket,并开始监听回调消息 =>开始建立连接 => 由后端来实时推送消息
    if ('WebSocket' in window) { // 判断当前浏览器是否支持websocket
      // eslint-disable-next-line no-undef
      this.webSocket = new ReconnectingWebSocket(this.url)
      console.log(this.url)
      
      //this.webSocket = new WebSocket(this.url)
      // 接收到消息
      this.webSocket.onmessage = this.callback
      // 连接成功的回调
      this.webSocket.onopen = () => {
        Message({
          message:'数据连接成功',
          type:'success'
        })
      }
      this.webSocket.onclose = () => {
        // 断开了 需要自动重新连接
        // 提醒webscoket需要重新连接
        Message({
          message:'数据连接已断开',
          type:'error'
        })
      }
      // 监听窗口关闭
      window.onbeforeunload = () => {
        this.closeWebsocket()
      }
    }
  }
  closeWebsocket() {
    
    this.webSocket.close()
  }
  webSocketMessage(res) {
    // 接收消息
    console.log(res)
  }
  webSocketSend(data) {
    // 发送消息
    console.log(data)
    //this.webSocket.send(JSON.stringify(data))
    if(data == '') {
      this.closeWebsocket()
    }else{
      this.webSocket.send(data)
    }
    
  }
  readyChat(data) {
    if (this.webSocket.readyState === 1) { // 连接成功,可以立即发送消息
    } else if (this.webSocket.readyState === 0) { // 表示正在连接

    } else { // 连接失败或是未连接
      console.warn('连接失败或是未连接')
    }
  }
}

export default webSocket
