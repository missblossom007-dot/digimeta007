@echo off
echo ========================================
echo Membuat Package untuk Upload ke Hosting
echo ========================================
echo.

echo Membuat folder upload-package...
if not exist "upload-package" mkdir upload-package

echo Copying files...
xcopy app upload-package\app\ /E /I /Y /Q
xcopy bootstrap upload-package\bootstrap\ /E /I /Y /Q
xcopy config upload-package\config\ /E /I /Y /Q
xcopy database upload-package\database\ /E /I /Y /Q
xcopy public upload-package\public\ /E /I /Y /Q
xcopy resources upload-package\resources\ /E /I /Y /Q
xcopy routes upload-package\routes\ /E /I /Y /Q
xcopy storage upload-package\storage\ /E /I /Y /Q

copy .env.example upload-package\.env.example
copy .htaccess upload-package\.htaccess
copy artisan upload-package\artisan
copy composer.json upload-package\composer.json
copy composer.lock upload-package\composer.lock
copy README.md upload-package\README.md

echo.
echo ========================================
echo Package siap!
echo ========================================
echo.
echo Folder: upload-package\
echo.
echo Langkah selanjutnya:
echo 1. Compress folder upload-package menjadi ZIP
echo 2. Upload ZIP ke cPanel File Manager
echo 3. Extract di server
echo 4. Ikuti panduan di UPLOAD_INSTRUCTIONS.md
echo.
pause
