FROM node:20-alpine

WORKDIR /app

EXPOSE 8790

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

CMD ["npm", "start"]
