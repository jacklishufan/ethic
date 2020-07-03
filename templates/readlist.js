function render_edit(data, type, row, meta){
            if(type === 'display'){
                if (data.can_edit) {
                    res = '<a target="_blank" href="/view/?uid=' + data.id + '&edit=true">' + " Edit" + '</a>';
                } else {
                    res = '<a target="_blank" href="/view/?uid=' + data.id + '">' + " Details" + '</a>';
                }
            }

            return res;
         };

function render_review(data, type, row, meta){
            if(type === 'display'){
                    res = '<a target="_blank" href="/view/?uid=' + data.id + '&review=true">' + " Review" + '</a>';
            }

            return res;
         };

function render_showreview(data, type, row, meta){
            if(type === 'display'){
                    res = '<a target="_blank" href="/view/?uid=' + data.id + '&showreview=true">' + " Detail" + '</a>';
            }

            return res;
         };

function get_columns(func){
    var tableColumns = [
        {
            "data": null,
            "render":func,
        },
        {data: "author", title: "Author", name: "author"},
        {data: "institution", title: "Institution", name: "institution"},
        {data: "time", title: "Time", name: "time"},
        {data: "edit_time", title: "Edited Time", name: "edit_time"},
        {data: "title", title: "Title", name: "title",},
        {data: "status_text", title: "Status", name: "status",}
        ];
    return tableColumns;
}

var status_list = [
    '-','以暂存','已提交','待复审','通过复审','未通过初审','未通过复审'
]

var ApplistTable;


function draw(data,func) {

        // $('#EmailBackfillTable').DataTable().destroy()
        ApplistTable = $('#applist').DataTable({
            paging: true,
            searching: true,
            processing: true,
            pageLength:30,
            data:data,
            order: [[3, 'desc']],
            dom: 'rtip',
            // data: data,
            columns: get_columns(func),
            // responsive: {
            //     details: {
            //         type: 'column',
            //         target: 1
            //     }
            // },
            pagingType: 'simple',
            select: true,
        });
}
function fetch(scope,statusfilter,opt){
    var processer;
    if (opt==='review'){
        processer = render_review
    } else if (opt==='showreview'){
        processer = render_showreview
    } else {
        processer = render_edit
    }
    var url ='/api/v1/apps/datatable/?'
    if (scope != null){
        url += 'scope='+scope;}
    if (statusfilter > 0 ){
        url += '&status='+statusfilter;}
    $.ajax(
        {
            method:'GET',
            url:url,
            success:function(resp){
                for(var item of resp){
                    item['status_text']=status_list[item['status']]
                }
                console.log(resp)
                draw(resp,processer)
            }
        }
    )
}
