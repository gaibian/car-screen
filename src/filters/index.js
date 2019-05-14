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
})()

