FROM node:carbon

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production
COPY . .

# Bundle app source
RUN npm run build
ENV HOST 0.0.0.0
ENV PORT 80
EXPOSE 80
CMD [ "npm", "start" ]