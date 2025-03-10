FROM node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8090

CMD [ "node", "/usr/src/app/src/server.js" ]