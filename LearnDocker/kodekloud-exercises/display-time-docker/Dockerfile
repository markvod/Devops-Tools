# Minimal base image
FROM alpine:latest
# Install necessary tools
RUN apk add --no-cache bash
# Copy the script into the image
COPY display_time.sh /display_time.sh
# Permissions to execute
RUN chmod +x /display_time.sh
# Run the script when the container starts
CMD [ "/display_time.sh" ]