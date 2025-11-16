@echo off
echo ========================================
echo Setup GitHub untuk DigiMeta007
echo ========================================
echo.

set /p USERNAME="Masukkan GitHub Username Anda: "
set /p EMAIL="Masukkan Email GitHub Anda: "

echo.
echo Mengkonfigurasi Git...
git config --global user.name "%USERNAME%"
git config --global user.email "%EMAIL%"

echo.
echo Menambahkan remote repository...
git remote add origin https://github.com/%USERNAME%/digimeta007.git

echo.
echo Mengubah branch ke main...
git branch -M main

echo.
echo Pushing ke GitHub...
git push -u origin main

echo.
echo ========================================
echo Selesai! Repository sudah di-push ke:
echo https://github.com/%USERNAME%/digimeta007
echo ========================================
pause
