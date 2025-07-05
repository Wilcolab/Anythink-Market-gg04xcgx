# Use the official Node.js base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY src ./src

# Expose the port on which the server will run
EXPOSE 3000

# Set the command to run the server
CMD ["npm", "start"]
