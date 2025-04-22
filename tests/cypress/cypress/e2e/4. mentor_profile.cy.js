describe('Mentor Profile', () => {
    it('Successfully views mentor details', () => {
        
        cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app');
        cy.wait(3000);

        //click menu mentor
        cy.get(':nth-child(2) > .LinkItem_navbar_link_item__Toizn > .inline-block').click();
        cy.get('#searchMentor').type("Bayem Sore");
  

        cy.wait(3000);

        //click card mentor
        cy.get('.flex:nth-child(1) > .flex-1 > .border-b > .line-clamp-1').click();
        cy.wait(5000);
        //Assertion
        cy.contains('Bayem Sore');
        // cy.contains('Account Payable di Custom Perusahaan');
        cy.contains('University of Indonesia');
        cy.contains('Super Mentor');

        // Tab
        cy.contains('Overview');
        cy.contains('Ulasan');

        // Statistik
        cy.contains('22');
        cy.contains('Total Sessions');
        cy.contains('19');
        cy.contains('Mentees Impacted');
        cy.contains('100%');
        cy.contains('Attendance Rate');
        cy.contains('15 Hour');
        cy.contains('Response Time');

        // Topik Keahlian - Karier
        cy.contains('Career Planning');
        cy.contains('Communication Skills');
        cy.contains('Leadership & Management');
        cy.contains('Kekuasaan');

        // Topik Keahlian - Academics
        cy.contains('XL Future Leaders');
        cy.contains('ASEAN Young Leaders Program');
        cy.contains('Exchange - Canada');
        cy.contains('LPDP');
        cy.contains('Fullbright');

        // Section Perkenalan
        cy.contains('Berkenalan dengan Bayem Sore');
        cy.contains(/^s$/); // "s" saja sebagai teks

        // Pengalaman
        cy.contains('Pengalaman');
        cy.contains('Account Payable');
        cy.contains('Custom Perushaan');
        cy.contains('Dec 2021 – Present');
        cy.contains('2D Artist');
        cy.contains('3s Asia Bdn Shd');
        cy.contains('3D Artist');
        cy.contains('Bank Andara');
        cy.contains('Dec 2021 – Dec 2022');

        // Pendidikan
        cy.contains('Pendidikan');
        cy.contains('Bachelor (S1) of Yawa Major');
        cy.contains('University of Indonesia');
        cy.contains('2017 – 2024');

        // Tips Menjaga Diri
        cy.contains('Tips Menjaga Diri');
        cy.contains('Mentor kami tidak akan pernah meminta data pribadi');
        cy.contains('Happy Mentoring!');

        // Ajukan Jadwal
        cy.contains('Mari Adakan Sesi Mentoring Bersama');
        cy.contains('Halo, saat ini jadwal saya sudah penuh.');
        cy.contains('Ajukan Jadwal');
    });
});

