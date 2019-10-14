FROM node:10.16.0

RUN mkdir -p /app/front
WORKDIR /app/front

COPY package.json /app/front
COPY package-lock.json /app/front

RUN npm install

COPY . /app/front



CMD ["npm", "start"]