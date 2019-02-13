<?php
require('../../../dmxConnectLib/dmxConnect.php');


$app = new \lib\App();

$app->define(<<<'JSON'
{
  "meta": {
    "options": {},
    "$_POST": [
      {
        "type": "text",
        "name": "first_name"
      },
      {
        "type": "text",
        "name": "last_name"
      },
      {
        "type": "date",
        "name": "date_stamp"
      }
    ]
  },
  "exec": {
    "steps": [
      "Connections/connection1",
      {
        "name": "insert1",
        "module": "dbupdater",
        "action": "insert",
        "options": {
          "connection": "connection1",
          "sql": {
            "type": "insert",
            "values": [
              {
                "table": "employees",
                "column": "first_name",
                "type": "text",
                "value": "{{$_POST.first_name}}"
              },
              {
                "table": "employees",
                "column": "last_name",
                "type": "text",
                "value": "{{$_POST.last_name}}"
              },
              {
                "table": "employees",
                "column": "date_stamp",
                "type": "date",
                "value": "{{$_POST.date_stamp}}"
              }
            ],
            "table": "employees",
            "query": "INSERT INTO employees (first_name, last_name, date_stamp) VALUES (:$_POST_first_name, :$_POST_last_name, :$_POST_date_stamp)",
            "params": [
              {
                "name": "$_POST_first_name",
                "type": "expression",
                "value": "{{$_POST.first_name}}"
              },
              {
                "name": "$_POST_last_name",
                "type": "expression",
                "value": "{{$_POST.last_name}}"
              },
              {
                "name": "$_POST_date_stamp",
                "type": "expression",
                "value": "{{$_POST.date_stamp}}"
              }
            ]
          }
        },
        "meta": [
          {
            "name": "identity",
            "type": "text"
          },
          {
            "name": "affected",
            "type": "number"
          }
        ]
      }
    ]
  }
}
JSON
);
?>