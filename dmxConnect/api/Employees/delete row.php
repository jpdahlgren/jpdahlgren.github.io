<?php
require('../../../dmxConnectLib/dmxConnect.php');


$app = new \lib\App();

$app->define(<<<'JSON'
{
  "meta": {
    "options": {}
  },
  "exec": {
    "steps": [
      "Connections/connection1",
      "DatabaseUpdater/delete/delete1"
    ]
  }
}
JSON
);
?>