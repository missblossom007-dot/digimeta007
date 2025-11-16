@echo off
cls
echo ========================================
echo Testing DigiMeta007 Laravel Server
echo ========================================
echo.
echo Starting server at http://127.0.0.1:8000
echo.
echo Tekan Ctrl+C untuk stop server
echo.
echo Setelah server jalan, buka browser:
echo - http://127.0.0.1:8000
echo - http://127.0.0.1:8000/products
echo.
echo ========================================
echo.

C:\laragon\bin\php\php-8.3.26-Win32-vs16-x64\php.exe artisan serve

pause
