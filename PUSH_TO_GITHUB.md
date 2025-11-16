# Push ke GitHub

Setelah membuat repository di GitHub, jalankan command berikut:

## Ganti USERNAME dengan username GitHub Anda

```bash
git remote add origin https://github.com/USERNAME/digimeta007.git
git branch -M main
git push -u origin main
```

## Atau jika sudah ada remote:

```bash
git remote set-url origin https://github.com/USERNAME/digimeta007.git
git push -u origin main
```

## Contoh:
Jika username GitHub Anda adalah "johndoe":
```bash
git remote add origin https://github.com/johndoe/digimeta007.git
git branch -M main
git push -u origin main
```

Anda akan diminta login GitHub saat push pertama kali.
