import Vue from 'vue'

export default (() => {
    Vue.filter('carType',(value) => {
        switch(value) {
            case 1 :
            return 'color:green'
            break;
            case 2 :
            return 'color:red'
            break;
            case 3 :
            return 'color:blue'
            break;
        }
    })
    Vue.filter('fileSize', (value) => {
        // eslint-disable-next-line eqeqeq
        if (value == null || value == '') {
          return '0 Bytes'
        }
        // eslint-disable-next-line no-array-constructor
        var unitArr = new Array('Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
        var index = 0
        var srcsize = parseFloat(value)
        index = Math.floor(Math.log(srcsize) / Math.log(1024))
        var size = srcsize / Math.pow(1024, index)
        //  保留的小数位数
        size = size.toFixed(2)
        return size + unitArr[index]
      })
})()

