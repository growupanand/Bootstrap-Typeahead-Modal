//function to call typeahead
function typeahead_modal(link, func, table_name, query_column) {
    document.typeahead_form.table_name.value = table_name
    document.typeahead_form.query_column.value = query_column
    document.typeahead_form.func.value = func
    document.typeahead_form.link.value = link
    $('#typeahead_modal').modal('show')
} //function END


//function to get data list from ajax
function typeahead_getdata() {
    html='<table><tr>';
    query_value=document.typeahead_form.query_value.value.trim() ;
    link = document.typeahead_form.link.value;
    table_name = document.typeahead_form.table_name.value ;
    query_column = document.typeahead_form.query_column.value
    result_table=document.getElementById('typeahead_result_list');
    query_array = query_column.split(",");
    func = document.typeahead_form.func.value;

    for (i in query_array ) {
        html = html+"<th>"+query_array[i]+"</th>";
    }

    html = html+"<th>ACTION</th></tr>"

    if (query_value != '') {
        $.ajax({
            data:{'task':'typeahead','table_name':table_name, 'query_column': query_column, 'query_value':query_value},
            type: 'post',
            url: link,
            dataType:'JSON',
            success: function (result) {
                typeahead_result = result
                sn=0;
                if (result.length>0) {
                    for (i in result) {
                        sn++;
                        html=html+'<tr>';
                        for (j in query_array ) {
                            html=html+'<td>'+result[i][query_array[j]]+'</td>';
                        }

                        html=html+'<td><button onclick="typeahead_select_function('+i+', '+func+')" class="btn btn-link">SELECT</button></td></tr>';
                    }
                }
                $(result_table).html(html);
            }
         });
    }
} //function END


function typeahead_select_function(i, f) {
typeahead_data = typeahead_result[i];
$('#typeahead_modal').modal('hide');
f();
}
