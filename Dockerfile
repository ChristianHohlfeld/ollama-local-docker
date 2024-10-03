# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the entire project into the container
COPY . .

# Expose ports
EXPOSE 80 443 3001

# Command to run the proxy server
CMD ["npm", "start"]
