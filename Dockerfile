FROM alpine:3.14
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]