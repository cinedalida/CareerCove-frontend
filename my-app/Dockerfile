# node.js image as base
FROM node:20-alpine

# Set working directory where the code will live
WORKDIR /app

# Copy package files first to insall dependencies (help with caching)
COPY package*.json ./

# Install the dependencies listed in package.json
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]