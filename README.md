typeahead_modal
---------------
Javascript module for using typeahead with twitter bootstrap 4.


Usage
-----

# Front end
Add Typeahead modal in Page

```html
<!-- Modal of typeahead -->
<div class="modal fade" id="typeahead_modal" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <form name="typeahead_form" id="typeahead_form">
          <input type="hidden" name="table_name"/>
          <input type="hidden" name="query_column"/>
          <input type="hidden" name="input_id"/>
          <input type="hidden" name="link"/>
          <input onkeyup="typeahead_getdata()" class="form-control" type="text" name="query_value" />
        </form>
      <div class="list-group" id="typeahead_result_list"></div>
      </div>
    </div>
  </div>
</div>
```
call typeahead by `typeahead_modal(link, input_id, table_name, data_column)`

```html
<input class="form-control" id="person_id" name="ID" type="hidden" />
<button class="btn btn-outline-secondary" type="button" onclick="typeahead_modal('ajax','person_id', 'table_persons', ['first_name','last_name'])">SELECT</button>
```

# Server side

For Python using flask add page 'ajax'
----------

```python
@app.route('/ajax',methods = ['POST'])
def ajax():
   task = ''

   if request.method == 'POST':
       task = request.form['task']


   
   if task == 'typeahead':
       table_name = request.form['table_name']
        query_column = request.form['query_column']
        get_column = request.form['query_column'].split(',')
        get_column.append('ID')
        query_value = request.form['query_value']
        query_string = ''
        i = 0;
        for column in request.form['query_column'].split(','):
            if i > 0:
                query_string += " OR "
            query_string += str(column) + " like '"+query_value+"%'"
            i += 1
        result_list = database.select_data(table_name, get_column, "WHERE "+query_string)
        return json.dumps(result_list)
```
