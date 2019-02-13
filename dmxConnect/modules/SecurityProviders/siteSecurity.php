<?php
$exports = <<<'JSON'
{
  "name": "siteSecurity",
  "module": "auth",
  "action": "provider",
  "options": {
    "secret": "1qJWtggSFaoKINN",
    "provider": "Static",
    "users": {
      "admin": "admin",
      "User1": "password1",
      "User2": "password2"
    },
    "perms": {
      "admin": [
        "admin"
      ],
      "edit": [
        "User1",
        "User2"
      ]
    }
  },
  "meta": [
    {
      "name": "identity",
      "type": "text"
    }
  ]
}
JSON;
?>