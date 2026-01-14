# DEPLOYMENT.md

## Nama Aplikasi
Nama: UAS Frontend

## URL Publik
- Live site: https://uas-frontend-iota.vercel.app/

## Ringkasan
Aplikasi ini dibuat menggunakan React + Vite dan menggunakan API publik: https://jsonplaceholder.typicode.com untuk menampilkan daftar todo / posting.

## Alasan memilih platform
Saya deploy menggunakan **Vercel** karena integrasinya dengan GitHub sangat mudah dan otomatis, build sangat cepat, serta mendukung preview deploy.

## Cara build & run (lokal)
1. `npm install`
2. `npm run dev` → localhost:5173
3. `npm run build` → menghasilkan folder `dist`
4. `npm run preview` → preview production

## Pengaturan deploy
- Build command: `npm run build`
- Publish directory: `dist`

## Screenshot
- Desktop: (sisipkan screenshot/jpg/png)
- Mobile: (sisipkan screenshot/jpg/png)

## Pengujian
- Semua fitur utama diuji di desktop dan mobile (Chrome DevTools), termasuk fetch data, tambah todo (simulasi), dan toggle theme.

## Notes
<img width="1920" height="1032" alt="Screenshot 2026-01-14 203436" src="https://github.com/user-attachments/assets/fb4cff59-8acd-4df4-924e-26e564bda863" />
<img width="1920" height="1032" alt="Screenshot 2026-01-14 203448" src="https://github.com/user-attachments/assets/ce7f90ec-2000-4a5b-8b8f-6a3e582213c1" />

- Jika memakai environment variable, atur di Vercel/Netlify pada Settings > Environment Variables.

