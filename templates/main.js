 import Vue from 'vue'
    import navigation from "./navigation"
    import ethic-form from "./ethic-form"
    var app = new Vue({
        el: '#app',
//         data: {
//             message: 'Hello Vue!',
//             user: {
//                 name: "李建民",
//                 institutional_admin: false,
//                 provincial_admin: false,
//             },
//             school: {
//                 name: "南京医科大学"
//             },
//             province: {
//                 name: "江苏省"
//             }
//         }
        components:{ navigation, ethic-form }
    })
