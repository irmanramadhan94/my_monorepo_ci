# my_monorepo_ci
Demo implementasi Continous Integration Test
## Cara Penggunaan Aplikasi

1. **Clone Repository**  
    Jalankan perintah berikut untuk meng-clone repository ini:
    ```bash
    git clone https://github.com/username/my_monorepo_ci.git
    cd my_monorepo_ci
    ```

2. **Install Dependencies**  
    Pastikan Anda sudah menginstall Node.js. Kemudian jalankan:
    ```bash
    npm install
    ```

3. **Menjalankan Aplikasi**  
    Untuk menjalankan aplikasi, gunakan perintah:
    ```bash
    npm start
    ```

4. **Build Aplikasi**  
    Untuk membuat build aplikasi, jalankan:
    ```bash
    npm run build
    ```

## Cara Penggunaan Cypress Test

1. **Install Cypress**  
    Pastikan Cypress sudah terinstall. Jika belum, jalankan:
    ```bash
    npm install cypress --save-dev
    ```

2. **Menjalankan Test**  
    Untuk menjalankan test menggunakan Cypress, gunakan perintah:
    ```bash
    npx cypress open
    ```
    Ini akan membuka Cypress Test Runner. Pilih test yang ingin dijalankan.

3. **Menjalankan Test di CLI**  
    Untuk menjalankan test langsung di terminal, gunakan:
    ```bash
    npx cypress run
    ```

4. **Menambahkan Test Baru**  
    Tambahkan file test baru di folder `cypress/e2e`. Contoh:
    ```javascript
    describe('My First Test', () => {
         it('Does not do much!', () => {
              expect(true).to.equal(true);
         });
    });
    ```

5. **Melihat Hasil Test**  
    Setelah test selesai dijalankan, hasilnya dapat dilihat di terminal atau di folder `cypress/reports` jika konfigurasi laporan diaktifkan.

## Implementasi CI Test

1. **Konfigurasi Pipeline CI**  
    Tambahkan file konfigurasi pipeline CI, misalnya `.github/workflows/ci.yml` untuk GitHub Actions. Contoh konfigurasi:
    ```yaml
    name: CI Pipeline

    on:
      push:
        branches:
          - main
      pull_request:
        branches:
          - main

    jobs:
      build-and-test:
        runs-on: ubuntu-latest

        steps:
        - name: Checkout Repository
          uses: actions/checkout@v3

        - name: Setup Node.js
          uses: actions/setup-node@v3
          with:
            node-version: '16'

        - name: Install Dependencies
          run: npm install

        - name: Build Application
          run: npm run build

        - name: Run Cypress Tests
          run: npx cypress run
    ```

2. **Menjalankan Pipeline**  
    Pipeline akan otomatis berjalan setiap kali ada perubahan pada branch `main` atau saat membuat pull request. Pastikan semua langkah, termasuk build aplikasi dan test Cypress, berjalan sukses.

3. **Melihat Hasil Pipeline**  
    Hasil pipeline dapat dilihat di tab `Actions` pada repository GitHub Anda. Jika ada error, periksa log untuk mengetahui penyebabnya.