@echo off
color 0A
cls
echo.
echo ============================================
echo   DigiMeta007 - Laravel Development Server
echo ============================================
echo.
echo Server akan berjalan di:
echo.
echo   http://127.0.0.1:8000
echo   http://localhost:8000
echo.
echo ============================================
echo.
echo Buka browser dan akses link di atas
echo.
echo Tekan Ctrl+C untuk stop server
echo.
echo ============================================
echo.

cd /d C:\digimeta007
C:\laragon\bin\php\php-8.3.26-Win32-vs16-x64\php.exe artisan serve --host=127.0.0.1 --port=8000

pause
