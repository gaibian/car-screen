// 绑定vue原型上的全局属性和方法
import Vue from 'vue'
// import api from '@/api'

class vuePrototype {
    constructor() {
        this.deviceSvgOptions = [
            {name:'急救舱中门',svg:'airInDoor'},
            {name:'上车担架在位开关',svg:'upDownStretcher'},
            {name:'氧气瓶（10L车载式）',svg:'oxygenBomb'},
            {name:'氧气瓶2',svg:'oxygenBomb'},
            {name:'急救舱后门',svg:'airBackDoor'},
            {name:'灭火器',svg:'cabFire'},
            {name:'病人保险带开关',svg:'safetyBelt'},
            {name:'十二导联心电图机',svg:'electrocardiogram'},
            {name:'温湿度1',svg:'breathingMachine'},
            {name:'病人',svg:'patient'},
            {name:'铲式担架',svg:'shovelStretcher'},
            {name:'软担架',svg:'softStretcher'},
            {name:'颈托',svg:'breathingMachine'},
            {name:'骨折固定夹板',svg:'breathingMachine'},
            {name:'氧气袋',svg:'oxygenBag'},
            {name:'简易呼吸器（成人）',svg:'breathingMachine'},
            {name:'简易呼吸器（儿童）',svg:'breathingMachine'},
            {name:'简易呼吸器（婴儿）',svg:'breathingMachine'},
            {name:'吸引器',svg:'breathingMachine'},
            {name:'急救箱',svg:'aidKit'},
            {name:'心电监护除颤仪',svg:'heartAll'},
            {name:'呼吸机',svg:'breathingMachine'},
            {name:'气管插管设备',svg:'breathingMachine'},
            {name:'产包',svg:'medicalKit'},
            {name:'免洗手消毒液',svg:'thimerosal'},
            {name:'医疗垃圾桶',svg:'medicalTrashCan'},
            {name:'医疗锐器盒',svg:'instrumentBox'},
            {name:'双道注射泵',svg:'injection'},
            {name:'随车工具',svg:'carTool'},
            {name:'氧气瓶（2L便携式）',svg:'oxygenBomb'},
            {name:'温湿度2',svg:'breathingMachine'}
        ]
    }

}
Vue.prototype.$token = 'bYAUnNuxv1jt5F2NIPcvXIiMxtphra'
//Vue.prototype.$token = 'dxow8RNOLtg8xwKugVOMSo6ZYVcN1u'
Vue.prototype.$ke = '123456'
// Vue.prototype.$api = api
Vue.prototype.$prototype = new vuePrototype()