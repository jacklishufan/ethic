$.ajaxSettings.async = false;
$.get('/static/navigation.html',function(html){
Vue.component('navigation', {
  delimiters: ['[[', ']]'],
    props:{
      user_data:{
          type:Object,
          default:()=>{return{
              user: {
                name: "{{ user_name }}",
                institutional_admin: true,
                provincial_admin: true,
                  institution:"南京医科大学"
            },
            province: {
                name: "江苏省"
            }
          }}
      }
    },
  data: function () {
    return {
        }
  },
    methods:{
      selectUrl(index){window.location.href=index},

    },
  template: html
});
})


