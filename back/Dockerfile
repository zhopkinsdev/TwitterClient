FROM node:10.16.0

RUN mkdir -p /app/back
WORKDIR /app/back

COPY package.json /app/back
COPY package-lock.json /app/back

RUN npm install

COPY . /app/back



CMD ["npm", "start"]