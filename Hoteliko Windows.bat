@echo off
start /min cmd /c "cd /d client && npm run dev"
start /min cmd /c "cd /d server && npm run dev"
start chrome --start-fullscreen "http://localhost:5173/"