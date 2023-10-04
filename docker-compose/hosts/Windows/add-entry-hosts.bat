@echo off

:: Configuration
set "hosts_file=C:\Windows\System32\drivers\etc\hosts"
set "ip_address=127.0.0.1"

set "host_name_example=api.example.local"
set "host_name_rabbitmq=rabbitmq.local"
set "host_name_redis=redis.local"

:: Function to add an entry if it doesn't exist
:add_entry
set "host_name=%~1"
findstr /C:"%ip_address% %host_name%" "%hosts_file%" >nul 2>nul
if %errorlevel%==0 (
    echo Entry '%host_name%' already exists in the hosts file.
) else (
    echo %ip_address% %host_name%>>"%hosts_file%"
    echo New entry '%host_name%' added to the hosts file.
)

:: Add entries
call :add_entry "%host_name_example%"
call :add_entry "%host_name_rabbitmq%"
call :add_entry "%host_name_redis%"

:: Exit
exit /b 0
