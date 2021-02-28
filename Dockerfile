FROM node:14
RUN npm i express body-parser
COPY . ./app
ENTRYPOINT [ "node", "app.js" ]