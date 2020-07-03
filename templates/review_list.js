
var tableColumns = [
    {data: "passed", title: "Result", name: "passed"},
    {data: "reviewer", title: "Reviewer", name: "reviewer"},
    {data: "time", title: "Time", name: "time"},
    {data: "comment", title: "Comment", name: "comment",},
    ];
var ReviewlistTable1, ReviewlistTable2;


function draw(data) {
        var rd_1 = [];
        var rd_2 = [];
        for (var item of data){
            if (item.round===1){
                rd_1.push(item)
            }
            if (item.round===2){
                rd_2.push(item)
            }
        }
        // $('#EmailBackfillTable').DataTable().destroy()
        ReviewlistTable1 = $('#reviewlist1').DataTable({
            paging: true,
            searching: true,
            processing: true,
            pageLength:30,
            data:rd_1,
            order: [[3, 'desc']],
            dom: 'rtip',
            // data: data,
            columns: tableColumns,
            // responsive: {
            //     details: {
            //         type: 'column',
            //         target: 1
            //     }
            // },
            pagingType: 'simple',
            select: true,
        });
        ReviewlistTable2= $('#reviewlist2').DataTable({
            paging: true,
            searching: true,
            processing: true,
            pageLength:30,
            data:rd_2,
            order: [[3, 'desc']],
            dom: 'rtip',
            // data: data,
            columns: tableColumns,
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
function fetches(uid){
    $.ajax(
        {
            method:'GET',
            url:'/api/v1/reviews/datatable/?uid='+uid,
            success:function(resp){
                console.log(resp)
                draw(resp)
            }
        }
    )
}
