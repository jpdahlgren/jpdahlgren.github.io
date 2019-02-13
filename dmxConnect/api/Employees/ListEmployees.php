<?php
require('../../../dmxConnectLib/dmxConnect.php');


$app = new \lib\App();

$app->define(<<<'JSON'
{
  "meta": {
    "options": {},
    "$_GET": [
      {
        "type": "text",
        "name": "filter"
      }
    ]
  },
  "exec": {
    "steps": [
      "Connections/connection1",
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
            "query": "SELECT employee_id, first_name, last_name, date_stamp FROM employees WHERE last_name LIKE :$_GET_filter ORDER BY employee_id ASC",
            "params": [
              {
                "operator": "contains",
                "type": "expression",
                "name": "$_GET_filter",
                "value": "{{$_GET.filter}}"
              }
            ],
            "sort": "",
            "dir": "",
            "wheres": {
              "condition": "AND",
              "rules": [
                {
                  "id": "employees.last_name",
                  "field": "employees.last_name",
                  "type": "string",
                  "operator": "contains",
                  "value": "{{$_GET.filter}}",
                  "data": {
                    "table": "employees",
                    "column": "last_name",
                    "type": "text"
                  },
                  "operation": "LIKE"
                }
              ],
              "conditional": null,
              "valid": true
            }
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
    ]
  }
}
JSON
);
?>