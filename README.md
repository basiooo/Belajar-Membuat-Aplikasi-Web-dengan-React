# Belajar Membuat Aplikasi Web dengan React
Submission Dicoding Untuk Kelas [Belajar Membuat Aplikasi Web dengan React](https://www.dicoding.com/academies/403)

## Preview : 
- [https://project.bagasjulianto.my.id/dicoding/BMAWDR/](https://project.bagasjulianto.my.id/dicoding/BMAWDR/)

## Link Sertifikat : 
- [https://www.dicoding.com/certificates/2VX36VEGNXYQ](https://www.dicoding.com/certificates/2VX36VEGNXYQ)


## Kriteria:
- [x] Kriteria Utama 1: Mampu Menampilkan Daftar Catatan
- [x] Kriteria Utama 2: Mampu Menambahkan Catatan
- [x] Kriteria Utama 3: Mampu Menghapus Catatan
- [x] Kriteria Opsional 1: Terdapat Fitur Pencarian Catatan
- [x] Kriteria Opsional 2: Terdapat Limit Karakter pada Input Judul Catatan
- [x] Kriteria Opsional 3: Terdapat Fitur Arsip Catatan


### Build React App
- Dengan docker

    ``` bash
    docker build -t catatan-app -f Dockerfile . && docker run -d --name catatan-app -v $(pwd):/catatan-app -v /catatan-app/node_modules catatan-app npm run build
    ```
- Tanpa docker

    ``` bash
    npm install
    npm run build
    ```

### Run React App
- Dengan docker

    ``` bash
    docker-compose up
    ```
- Tanpa docker

    ``` bash
    npm install
    npm run dev
    ```
