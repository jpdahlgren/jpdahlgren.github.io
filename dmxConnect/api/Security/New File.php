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
      "SecurityProviders/siteSecurity",
      {
        "name": "identity",
        "module": "auth",
        "action": "login",
        "options": {
          "provider": "siteSecurity"
        },
        "output": true,
        "meta": [
          {
            "name": "identity",
            "type": "text"
          }
        ]
      }
    ]
  }
}
JSON
);
?>