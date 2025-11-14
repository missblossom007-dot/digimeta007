@echo off
echo Starting Laravel Development Server...
echo.
echo Server akan berjalan di: http://127.0.0.1:8000
echo Tekan Ctrl+C untuk stop server
echo.
C:\laragon\bin\php\php-8.3.26-Win32-vs16-x64\php.exe artisan serve
pause
