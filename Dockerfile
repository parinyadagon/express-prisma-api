FROM node:alpine

WORKDIR /app

COPY package.json .

COPY prisma ./prisma/

COPY .env ./

COPY . .

RUN npm install

RUN npx prisma generate
RUN npx prisma migrate deploy

ENV NODE_ENV=production
EXPOSE 5000

CMD ["npm", "run", "start"]