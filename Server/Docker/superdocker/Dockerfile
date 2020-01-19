FROM nginx:latest
MAINTAINER s5kywa1k3r

RUN apt-get update
RUN apt-get install -y npm git procps curl

#################
##   BACKEND   ##
#################
# Install npm: 6.13.4, ts: 3.7.4, ts-node: 8.5.4
RUN npm install -g npm@6.13.4 typescript@3.7.4 ts-node@8.5.4

# Install nodeJS: 12.14.0
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

# Open Host Port
# express port
EXPOSE 3000

# database port
# EXPOSE 33060

# superdocker port
# EXPOSE 31111
