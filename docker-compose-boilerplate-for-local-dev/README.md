# Docker Compose boilerplate for local development

`docker-compose.yml` includes containers for the following services:

- Nginx&ast;
- Node.js 
- Node.js
- PostgreSQL&ast;&ast;
- Redis
- PHP + Apache

> before running Nginx, setup the configuration of virtual servers in `nginx/conf.d/`. There are several boilerplate config files in this folder - edit or replace them with your own. If you won't do this, Nginx will be unable to start, cause the current config files contain conflicting settings (intentionally)

> `postgres-db` contains `.sql` script that creates new databases/table/user. Edit it respective to your project needs
