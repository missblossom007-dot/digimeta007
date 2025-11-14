Write-Host "Starting Laravel Development Server..." -ForegroundColor Green
Write-Host "Server: http://127.0.0.1:8000" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
Write-Host ""

Set-Location C:\digimeta007
& "C:\laragon\bin\php\php-8.3.26-Win32-vs16-x64\php.exe" artisan serve
