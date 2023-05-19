echo off
cls
title  Network Routine
echo Pinging Facebook...
ping facebook.com
echo.
echo Ping test complete!
echo.
echo Saving your network info...
echo.
ipconfig > networks.txt
pause