describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('http://localhost:4200', {
            onBeforeLoad(win) {
                cy.stub(win, 'open')
            }
        });
        cy.contains('Show Albums').click();
        cy.get('select').select('quidem molestiae enim');
        cy.get('img').first().click();
        cy.window().its('open').should('be.called')
    });
});
