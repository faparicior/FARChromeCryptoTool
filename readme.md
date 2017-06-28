FARChromeCryptoTool
===================

Do you need to store sensible passwords in an cloud environmemt like EverNote, Confluence, DropBox, Dokuwiki?...

It seems secure until someone break security. And then your passwords are exposed.

This project is a chrome extension that encrypt your passwords using local resources or using a php code acting as a API.

Chome extemsion + Server side installation
------------------------------------------

1) Clone the project
--------------------

```bash
git clone https://github.com/faparicior/FARChromeCryptoTool.git
```

2) Install the components
-------------------------

```bash
composer install
```

3) Edit the server.conf file and personalize your KEY and TOKEN 
---------------------------------------------------------------

KEY = 'test_purposes';
TOKEN = 'test_token';

4) Launch a php server instance
-------------------------------

```bash
php app/console server:run 127.0.0.1:8080
```

5) Install the Chrome extension
-------------------------------

(Place the URL extension here...)

6) Configure the extension to use the server mode
-------------------------------------------------

- Go to the config screen
- Place the server url + main.php (http://localhost:3000/main.php)
- Place the token configured on the server side

Chome extension + Server side installation
------------------------------------------

1) Install the Chrome extension
-------------------------------

(Place the URL extension here...)

2) Configure the extension to use the local mode
-------------------------------------------------

Go to the config screen and place the Key that needs to encrypt.


And that's it!!!!
=================