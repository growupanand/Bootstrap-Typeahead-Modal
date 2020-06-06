typeahead_modal
---------------
Javascript module for using typeahead with twitter bootstrap 4.


Usage
-----

 Add Typeahead modal in Page
--------------------
```html
<!-- Modal of typeahead -->
<div class="modal fade" id="typeahead_modal" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <form name="typeahead_form" id="typeahead_form">
          <input type="hidden" name="table_name"/>
          <input type="hidden" name="data_column"/>
          <input type="hidden" name="input_id"/>
          <input type="hidden" name="link"/>
          <input onkeyup="typeahead_getdata()" class="form-control" type="text" name="query" />
        </form>
      <div class="list-group" id="typeahead_result_list"></div>
      </div>
    </div>
  </div>
</div>
```

CALL FUNCTION
-------------
call typeahead by `typeahead_modal(link, input_id, table_name, data_column)`

```html
<input class="form-control" id="name_id" name="Name" type="text" />
<button class="btn btn-outline-secondary" type="button" onclick="typeahead_modal('ajax','name_id', 'persons', ['name'])">SELECT</button>
```
