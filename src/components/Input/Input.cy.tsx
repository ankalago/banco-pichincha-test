import Input from './Input';

describe('Input.cy.tsx', () => {
  beforeEach(() => {
    cy.mount(<Input name="input-text" />)
  })

  it('playground', () => {
    cy.get('#input-text').type('Hello Pool')
    cy.get('#input-text').type('{selectAll}{backspace}')
    cy.get('#input-text').type('How are you?')
    cy.get('#input-text').should('have.value', 'How are you?')
  })
})
