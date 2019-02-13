<?php
$exports = <<<'JSON'
{
  "name": "delete1",
  "module": "dbupdater",
  "action": "delete",
  "options": {
    "connection": "connection1",
    "sql": {
      "type": "delete",
      "table": "employees",
      "wheres": {
        "condition": "AND",
        "rules": [
          {
            "id": "employee_id",
            "field": "employee_id",
            "type": "double",
            "operator": "equal",
            "value": "{{$_POST.employee_id}}",
            "data": {
              "column": "employee_id"
            },
            "operation": "="
          }
        ],
        "conditional": null,
        "valid": true
      },
      "query": "DELETE FROM employees WHERE employee_id = :$_POST_employee_id",
      "params": [
        {
          "operator": "equal",
          "type": "expression",
          "name": "$_POST_employee_id",
          "value": "{{$_POST.employee_id}}"
        }
      ]
    }
  },
  "meta": [
    {
      "name": "affected",
      "type": "number"
    }
  ]
}
JSON;
?>