1 - install docker = 
  https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2

2 - Create a docker image - POSTGRES -  
  $ docker run --name postgres -e POSTGRES_PASSWORD=micway1 -p 5433:5432 -d postgres

3 - Check if the database postgres is running:
    $ docker run

4 - Use Dbeaver to access Postgres data: Dbeaver.io
create a connection using the informantion of docker postgres image (2).

5 - Rename the file ormconfigExample.json to ormconfig.json

6 - Run the migration to create database tables
 $ yarn migration:run

7 - Run server:
  $ yarn dev:server

8 - then back to todo-front and execute $yarn start

