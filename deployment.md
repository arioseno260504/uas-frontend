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
- Jika memakai environment variable, atur di Vercel/Netlify pada Settings > Environment Variables.
<img width="1920" height="1032" alt="Tampilan mobile (2)" src="https://github.com/user-attachments/assets/6efd6517-3d72-4c75-9f84-17460ba5551a" />
<img width="1920" height="1032" alt="Tampilan desktop" src="https://github.com/user-attachments/assets/bdb7c936-40aa-4e41-92ae-1153fd7be670" />
