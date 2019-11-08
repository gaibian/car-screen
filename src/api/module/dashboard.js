// import http from '@/utils/http'


export default function getData (){
    return http.get('http://192.168.3.115:8085/configure')
}

// export default function setData (){
//     return http.get('http://192.168.3.115:8085/setUp')
// }