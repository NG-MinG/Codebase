FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install && yarn cache clean
# If you are building your code for production
# RUN yarn install --frozen-lockfile --production

COPY . .

EXPOSE 4500

CMD ["yarn", "start"]