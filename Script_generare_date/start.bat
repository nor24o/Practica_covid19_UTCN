@echo off
IF exist node_modules (  call  npm run start ) ELSE ( npm install )