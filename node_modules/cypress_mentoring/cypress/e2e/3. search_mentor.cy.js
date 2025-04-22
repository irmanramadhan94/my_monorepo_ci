describe('Search Mentor Feature', () => {
  const filters = {
    name: 'Budi',
    company: 'Adira Finances',
    role: 'AI/ML',
    industry: 'Danone',
    university: 'Telkom',
    major: 'BISNIS',
    topic: 'Goal Setting'
  };

  beforeEach(() => {
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app');
    cy.wait(3000);
    // cy.screenshot('fitur mentor')
    cy.get(':nth-child(2) > .LinkItem_navbar_link_item__Toizn > .inline-block').click();
  });

  it('should search mentor by name', () => {
    cy.get('#searchMentor').type(filters.name);
    cy.contains(filters.name);
    cy.get('#searchMentor').clear();
  });

  it('should search mentor by company', () => {
    cy.get('#searchMentor').type(filters.company);
    cy.wait(3000);
    cy.contains(filters.company);
    cy.get('#searchMentor').clear();
  });

  it('should search mentor by role', () => {
    cy.get('#searchMentor').type(filters.role);
    cy.wait(3000);
    cy.contains(filters.role);
    cy.get('#searchMentor').clear();
  });

  it('should search mentor by industry', () => {
    cy.get('#searchMentor').type(filters.industry);
    cy.contains(filters.industry);
    cy.get('#searchMentor').clear();
  });

  it('should search mentor by university', () => {
    cy.get('#searchMentor').type(filters.university);
    cy.wait(3000);
    cy.get('.flex:nth-child(1) > .flex-1 > .border-b > .line-clamp-1').click();
    cy.contains(filters.university);
    cy.go('back');
    cy.wait(3000);
    cy.get('#searchMentor').clear();
  });

  it('should search mentor by major', () => {
    cy.get('#searchMentor').type(filters.major);
    cy.wait(3000);
    cy.get('.flex:nth-child(1) > .flex-1 > .border-b > .line-clamp-1').click();
    cy.contains(filters.major);
    cy.go('back');
    cy.wait(3000);
    cy.get('#searchMentor').clear();
  });

  it('should search mentor by topic', () => {
    cy.get('#searchMentor').type(filters.topic);
    cy.wait(3000);
    cy.contains(filters.topic);
  });
});