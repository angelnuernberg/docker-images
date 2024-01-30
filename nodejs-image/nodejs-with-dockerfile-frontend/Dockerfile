FROM node:15.14-alpine 

WORKDIR /app
EXPOSE 3000 

copy package.json package-lock.json ./ 

RUN npm install --silent 
# During installation of al project dependencies using NPM, node_modules
# will be created inside of the Docker image 

# I include installation of ping 
RUN apk upgrade
RUN apk add util-linux

COPY . ./ 

CMD ["npm", "start"]

