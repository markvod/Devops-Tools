FROM ubuntu:latest

RUN sudo apt update && apt install -y apache2

RUN echo "Listen 6100" >> /etc/apache2/apache2.conf

EXPOSE 6100

ENTRYPOINT ["apache2ctl", "-D", "FOREGROUND"]