FROM node:latest
ENV PATH="./node_modules/.bin:$PATH"
COPY . /usr/src/Deployment
WORKDIR /usr/src/Deployment
EXPOSE 3000
CMD ["npm", "start"]