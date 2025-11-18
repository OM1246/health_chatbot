# Use Node.js 18 as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/

# Install dependencies for both frontend and backend
RUN npm install
RUN cd client && npm install
RUN cd server && npm install

# Copy the rest of the application code
COPY . .

# Build the React frontend
RUN cd client && npm run build

# Expose the port the app runs on
EXPOSE 8080

# Start the application
CMD ["npm", "start"]