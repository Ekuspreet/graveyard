@echo off
start cmd /k "cd /d api & nodemon index.js"
start cmd /k "cd /d client & npm run dev"
