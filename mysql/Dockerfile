FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD=kash
ENV MYSQL_DATABASE=employees_db

COPY ./mysql_script.sql /docker-entrypoint-initdb.d/  
