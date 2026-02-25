FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your project files into nginx
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# docker run -d -p 8080:80 --name bts-monitor-container bts-monitor
