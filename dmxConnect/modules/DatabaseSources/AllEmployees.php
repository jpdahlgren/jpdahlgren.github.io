<?php
$exports = <<<'JSON'
{
  "name": "AllEmployees",
  "module": "dbconnector",
  "action": "select",
  "options": {
    "connection": "connection1",
    "sql": {
      "type": "SELECT",
      "columns": [
        {
          "table": "employees",
          "column": "employee_id"
        },
        {
          "table": "employees",
          "column": "first_name"
        },
        {
          "table": "employees",
          "column": "last_name"
        },
        {
          "table": "employees",
          "column": "date_stamp"
        }
      ],
      "table": {
        "name": "employees"
      },
      "joins": [],
      "orders": [
        {
          "table": "employees",
          "column": "employee_id",
          "direction": "ASC",
          "recid": 1
        }
      ],
      "query": "SELECT employee_id, first_name, last_name, date_stamp FROM employees ORDER BY employee_id ASC",
      "params": [],
      "sort": "",
      "dir": ""
    }
  },
  "meta": [
    {
      "name": "employee_id",
      "type": "number"
    },
    {
      "name": "first_name",
      "type": "text"
    },
    {
      "name": "last_name",
      "type": "text"
    },
    {
      "name": "date_stamp",
      "type": "date"
    }
  ],
  "outputType": "array",
  "output": true
}
JSON;
?>