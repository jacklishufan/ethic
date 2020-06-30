$.ajaxSettings.async = false;
$.get('static/form.html',function(html){
Vue.component('ethic-form', {
  delimiters: ['[[', ']]'],
  data: function () {
    return {
            ethic_form_data: {
                protocal_title_cn: '',
                protocal_title_en: '',
                fund_source_cn: '',
                fund_source_en:'',
                period_start:'',
                period_end:'',
                applicant_cn:'',
                applicant_en:'',
                applicant_title_cn:'',
                applicant_title_en:'',
                applicant_tel:'',
                app_department_cn:'',
                app_department_en:'',
                applicant_email:'',
                principle_investigator_cn:'',
                principle_investigator_en:'',
                principle_investigator_title_cn:'',
                principle_investigator_title_en:'',
                principle_investigator_department_cn:'',
                principle_investigator_department_en:'',
                principle_investigator_tel:'',
                principle_investigator_email:'',
                staff:[
                    {
                        name:'',
                        title:'',
                        certificate:'',
                        tel:'',
                        email:'',
                    }
                ],
                text_3_1:'',
                text_3_2:'',
                text_3_3:'',
                check_box_4_1:[
                    {
                        title:'繁育中心',
                        checked:false,
                        text:'',
                    },
                                        {
                        title:'五台动物房',
                        checked:false,
                        text:'',
                    },
                                        {
                        title:'基地公用平台动物房',
                        checked:false,
                        text:'',
                    },
                                        {
                        title:'国内其他饲养繁殖单位',
                        checked:false,
                        text:'',
                    },
                                        {
                        title:'国外引进',
                        checked:false,
                        text:'',
                    },
                ],
                check_box_4_2:'',
                check_box_4_3_main:[],
                check_box_4_3:[
                    {
                        title:'大鼠',
                        checked:false,
                        text:'',
                    },
                                        {
                        title:'小鼠',
                        checked:false,
                        text:'',
                    },
                                        {
                        title:'裸鼠',
                        checked:false,
                        text:'',
                    },
                                        {
                        title:'国内其他饲养繁殖单位',
                        checked:false,
                        text:'',
                    },
                                        {
                        title:'其他（具体说明',
                        checked:false,
                        text:'',
                    },
                ],
                check_box_4_4_main:[],
                check_box_4_4:[
                    {
                        title:'普通',
                        checked:false,
                        text:'',
                    },
                                        {
                        title:'清洁',
                        checked:false,
                        text:'',
                    },
                                        {
                        title:'SPF',
                        checked:false,
                        text:'',
                    },
                                        {
                        title:'无菌',
                        checked:false,
                        text:'',
                    },
                ],
                count_4_6:{
                    male:'',
                    female:'',
                },
                week_4_7:'',
                location_4_8:'',
                check_box_4_9_main:[],
                check_box_4_9:[
                    {
                        title:'屏障设施',
                        checked:false,
                        text:'',
                    },
                                        {
                        title:'普通设施',
                        checked:false,
                        text:'',
                    },
                                        {
                        title:'隔离设施',
                        checked:false,
                        text:'',
                    },
                ],
                check_box_4_10:[
                    {
                        title:'一些生物学过程和机理不能在体外研究',
                        checked:false,
                        text:'',
                                                 has_text:false,
                    },
                                        {
                        title:' 已进行体外实验，现必须进行体内实验',
                        checked:false,
                        text:'',
                                                                     has_text:false,
                    },
                                        {
                        title:'体外实验需要动物组织',
                        checked:false,
                        text:'',
                                                                     has_text:false,
                    },
                                                            {
                        title:'其它，请具体说明',
                        checked:false,
                        text:'',
                         has_text:true,
                    },
                ],
                check_box_4_11:[
                    {
                        title:'该品种的生理学、解剖学、身体大小等特点最适于本研究',
                        checked:false,
                        text:'',
                                                 has_text:false,
                    },
                                        {
                        title:' 该品种是本实验公认的理想动物模型',
                        checked:false,
                        text:'',
                                                                     has_text:false,
                    },
                                        {
                        title:'利用该品种已获得大量的相关数据, 本研究进一步扩展该品种相关数据',
                        checked:false,
                        text:'',
                                                                     has_text:false,
                    },
                                                            {
                        title:'从其它品种动物扩展相关数据到该品种',
                        checked:false,
                        text:'',
                         has_text:false,
                    },
                                                                                {
                        title:'其它，请具体说明:',
                        checked:false,
                        text:'',
                         has_text:true,
                    },
                ],
                text_4_11:'',
                text_5_1:'',
                med_5_2:[
                    {
                        name:'',
                        dose:'',
                        frq:'',
                        apr:'',
                        part:'',
                    }
                ],
                med_5_3:[
                    {
                        name:'',
                        dose:'',
                        frq:'',
                        apr:'',
                        part:'',
                    }
                ],
                text_5_4:'',
                text_5_4_1:'',
                text_5_4_2:'',
                text_5_4_3:'',
                check_box_5_5:'',
                check_box_5_6_main:'',
                check_box_5_6:[
                    {
                        title:'无疼痛或痛苦',
                        checked:false,
                        text:'',
                    },
                                        {
                        title:'轻微疼痛或痛苦',
                        checked:false,
                        text:'',
                    },
                                        {
                        title:'明显疼痛或痛苦',
                        checked:false,
                        text:'',
                    },
                                                            {
                        title:'重度疼痛或痛苦',
                        checked:false,
                        text:'',
                    },
                ],
                med_5_5:[
                    {
                        name:'',
                        dose:'',
                        frq:'',
                        apr:'',
                    }
                ],
                check_box_5_7: [
                    {
                    "title": "1、体重减轻：体重减轻达20-25％，或是动物出现恶病质或消耗性症候时",
                    "text": "",
                    "has_text": false
                }, {
                    "title": "2、实体瘤的大小超过动物体重的10%",
                    "text": "",
                    "has_text": false
                }, {
                    "title": "3、丧失食欲：小型啮齿类动物完全丧失食欲达24小时或食欲不佳（低于正常量之50％）达3天时。大动物完全丧失食欲达5天或食欲不佳（低于正常量之50％）达7天时",
                    "text": "",
                    "has_text": false
                }, {
                    "title": "4、虚弱（无法进食或饮水）：动物在没有麻醉或镇静的状态下，无法进食或饮水，长达24小时无法站立或极度勉强才可站立时",
                    "text": "",
                    "has_text": false
                }, {
                    "title": "5、垂死/濒死：动物在没有麻醉或镇静的状态下，表现精神抑郁伴随体温过低（低于37℃）时",
                    "text": "",
                    "has_text": false
                }, {
                    "title": "6、感染，在抗生素治疗无效并伴随动物全身性不适症状",
                    "text": "",
                    "has_text": false
                }, {
                    "title": "7、器官：出现器官严重丧失功能的临床症状且治疗无效，或经动物中心兽医师判断预后不佳",
                    "text": "",
                    "has_text": false
                }, {
                    "title": "8、呼吸系统：呼吸困难、发绀大失血",
                    "text": "",
                    "has_text": false
                }, {
                    "title": "9、心血管系统：大失血、已给予一次输液治疗后仍贫血（低于20％）",
                    "text": "",
                    "has_text": false
                }, {
                    "title": "10、消化系统：严重呕吐或下痢，消化道阻塞，套迭，腹膜炎，内脏摘除手术",
                    "text": "",
                    "has_text": false
                }, {
                    "title": "11、神经系统：中枢神经抑制、震颤、瘫痪（其中任一肢或以上）、对止痛剂治疗无效之疼痛",
                    "text": "",
                    "has_text": false
                }, {
                    "title": "12、肌肉骨骼系统：肌肉受损或骨折使肢体丧失功能（实验预期发生并通过IACUC审核除外）",
                    "text": "",
                    "has_text": false
                }, {"title": "13、皮肤：无法治愈之伤口、重复性自残或二级以上之保温垫烫伤", "text": "", "has_text": false}
                ],
                table_5_8:{
                    obj_1:false,
                    obj_2:false,
                    obj_3:false,
                    obj_4:false,
                    obj_5:false,
                    obj_6:false,
                    obj_7:false,
                    obj_8:false,
                    obj_9:false,
                    obj_10:false,
                },
                check_box_5_9: [
                    {"title": "1、断头", "text": "", "has_text": false},
                    {
                        "title": "2、头颈部脱臼",
                        "text": "",
                        "has_text": false
                    }, {
                        "title": "3、放血法，如割开大血管、心脏灌注、摘取主要器官",
                        "text": "",
                        "has_text": false
                    }, {"title": "4、切开胸部，使动物气胸和停止呼吸", "text": "", "has_text": false}, {
                        "title": "5、其它， 请具体说明:", "text": "", "has_text": true}
                ],
                check_box_5_10: [
                    {"title": "1、动物已经不动了，没有呼吸了", "text": "", "has_text": false},
                    {"title": "2、动物已没有呼吸、心跳、角膜反射、肌张力和粘膜颜色", "text": "", "has_text": false},
                    {"title": "3、其它 ，请具体说明", "text": "", "has_text": true},
                    ],
                check_box_5_11: [
                            {
                                "title": "1、安乐死",
                                "text": "",
                                "has_text": false
                            },
                            {
                                "title": "2、返回供应单位",
                                "text": "",
                                "has_text": false
                            },
                            {
                                "title": "3、转给其它课题组",
                                "text": "",
                                "has_text": false
                            },
                            {
                                "title": "4、饲养直至其自然死亡",
                                "text": "",
                                "has_text": false
                            },
                            {
                                "title": "5、其它，请具体说明:",
                                "text": "",
                                "has_text": true
                            }
                        ],
                check_box_5_12:[
                     {"title": "1、制作标本", "text": "", "has_text": false},
                     {"title": "2、集中无公害化处理", "text": "", "has_text": false},
                     {"title": "3、其它，请具体说明:", "text": "", "has_text": true},
                ],
                check_box_5_13:[
                    {
                        "title": "1、放射性同位素",
                        "text": "",
                        "has_text": true
                    },
                    {
                        "title": "2、生物物品",
                        "text": "",
                        "has_text": true
                    },
                    {
                        "title": "3、化学品、药品",
                        "text": "",
                        "has_text": true
                    },
                    {
                        "title": "4、重组",
                        "text": "",
                        "has_text": true
                    },
                    {
                        "title": "DNA",
                        "text": "",
                        "has_text": true
                    },
                    {
                        "title": "5、其它",
                        "text": "",
                        "has_text": true
                    },
                    {
                        "title": "6、无",
                        "text": "",
                        "has_text": true
                    }
                    ],
                    text_5_14:'',


            },
        fileList:[],
        ethic_rules: {
            text: [{required: true, trigger:'blur' }],

            },
            province: {
                name: "江苏省"
            }
        }
  },
  template: html,
    methods: {
      removeStaff(item){
         var index = this.ethic_form_data.staff.indexOf(item)
        if (index !== -1) {
          this.ethic_form_data.staff.splice(index, 1)
        }

      },
      removeItem(item,lst){
         var index = lst.indexOf(item)
        if (index !== -1) {
          lst.splice(index, 1)
        }

      },
      addItemMed(lst) {
          lst.push({
                        name:'',
                        dose:'',
                        frq:'',
                        apr:'',
                        part:'',
              key: Date.now()
          });
      },
        addItemMed2(lst) {
          lst.push({
                        name:'',
                        dose:'',
                        frq:'',
                        apr:'',
              key: Date.now()
          });
      },
      addStaff() {
          this.ethic_form_data.staff.push({
                   name:'',
                        title:'',
                        certificate:'',
                        tel:'',
                        email:'',
              key: Date.now()
          });
      }
    }
});
})
