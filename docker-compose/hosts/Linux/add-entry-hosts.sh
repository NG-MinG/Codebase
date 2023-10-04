#!/bin/bash

# Configuration
hosts_file="/etc/hosts"
ip_address="127.0.0.1"

host_name_example="api.example.local"
host_name_rabbitmq="rabbitmq.local"
host_name_redis="redis.local"

# Function to add an entry if it doesn't exist
add_entry() {
    local host_name=$1
    if grep -q "$host_name" "$hosts_file"; then
        echo "Entry '$host_name' already exists in the hosts file."
    else
        echo "$ip_address $host_name" | sudo tee -a "$hosts_file" >/dev/null
        echo "New entry '$host_name' added to the hosts file."
    fi
}

# Add entries
add_entry "$host_name_example"
add_entry "$host_name_rabbitmq"
add_entry "$host_name_redis"