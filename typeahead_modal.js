  //function to call typeahead
  function typeahead_modal(link, input_id, table_name, data_column) {
    document.typeahead_form.table_name.value = table_name
    document.typeahead_form.data_column.value = data_column
    document.typeahead_form.input_id.value = input_id
    document.typeahead_form.link.value = link
    $('#typeahead_modal').modal('show')
  }


  //function to get data list from ajax
  function typeahead_getdata() {
             html='';
			 query=document.typeahead_form.query.value.trim() ;
			 link = document.typeahead_form.link.value;
			 table_name = document.typeahead_form.table_name.value ;
			 input_id = document.typeahead_form.input_id.value;
			 data_column = document.typeahead_form.data_column.value
	         result_table=document.getElementById('typeahead_result_list');

	         if (query != '') {
	            $.ajax({
			        data:{'task':'typeahead','table_name':table_name, 'data_column': data_column, 'query':query},
                    type: 'post',
                    url: link,
			        dataType:'JSON',
                    success: function (result) {
				    sn=0;
				    if (result.length==0) {alert('no record found');}
                    else {
			         for (i in result) {
				     sn++;
			    	 html=html+'<button onclick="typeahead_insert_data(\''+input_id+'\',\''+result[i].name+'\')" class="list-group-item list-group-item-action">'+result[i].name+'</button>';
			         }
			        $(result_table).html(html);
			         }
                 }
                 });
	         }

  }


  //insert selected data to input
  function typeahead_insert_data(input_id, input_data) {
    document.getElementById(input_id).value = input_data;
    $('#typeahead_modal').modal('hide');
  }
