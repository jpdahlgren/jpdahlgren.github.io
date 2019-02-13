<?php
// Database Type : "MySQL"
// Database Adapter : "mysql"
$exports = <<<'JSON'
{
    "name": "connection1",
    "module": "dbconnector",
    "action": "connect",
    "options": {
        "server": "mysql",
        "connectionString": "mysql:host=localhost;dbname=wwwidgets_db;user=root;charset=utf8",
        "limit" : 1000,
        "debug" : false,
        "meta"  : {"allTables":["customers","employees","widgets"],"allViews":[],"tables":{"employees":{"columns":{"employee_id":{"type":"int","primary":true},"first_name":{"type":"varchar","size":15},"last_name":{"type":"varchar","size":15},"date_stamp":{"type":"date"}}}}}
    }
}
JSON;
?>