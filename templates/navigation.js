$.ajaxSettings.async = false;
$.get('static/navigation.html',function(html){
Vue.component('navigation', {
  delimiters: ['[[', ']]'],
  data: function () {
    return {
            message: 'Hello Vue!',
            user: {
                name: "李建民",
                institutional_admin: true,
                provincial_admin: true,
            },
            school: {
                name: "南京医科大学"
            },
            province: {
                name: "江苏省"
            }
        }
  },
  template: html
});
})


