const pokemon = {
    name: "Pool",
    hp: 100,
    type: "Programmer",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    attack: 98,
    defense: 80,
}

Cypress.Commands.add('controlledInputChange', { prevSubject: 'element'}, (input, value) => {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
    ).set
    const changeInputValue = inputToChange => newValue => {
        nativeInputValueSetter.call(inputToChange[0], newValue)
        inputToChange[0].dispatchEvent(new Event('change', { newValue, bubbles: true }))
    }
    return cy.get(input).then(input => changeInputValue(input)(value))
})

describe('pokemon app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173')
    })

    it('add the best Pokemon', () => {
        cy.get('[data-testid="new"]').click()
        cy.get('[data-testid="name"]').type(pokemon.name)
        cy.get('[data-testid="hp"]').type('{selectAll}')
        cy.get('[data-testid="hp"]').type(pokemon.hp)
        cy.get('[data-testid="type"]').type(pokemon.type)
        cy.get('[data-testid="image"]').type(pokemon.image)
        cy.get('[data-testid="attack"]').type(`${pokemon.attack}`).trigger("change")
        cy.get('[data-testid="defense"]').type(`${pokemon.defense}`).trigger("change")
        cy.get('[data-testid="submit"]').click()
        cy.wait(1000)
        cy.get('#Pool[data-testid="item-remove"]').should('exist')
        cy.reload()
    })

    it('remove the best Pokemon', () => {
        cy.get('#Pool[data-testid="item-remove"]').click()
        cy.wait(1000)
    })

    it('check remove the best Pokemon', () => {
        cy.wait(1000)
        // cy.screenshot('check-remove-the-best-pokemon')
        cy.get('#Pool[data-testid="item-remove"]').should('not.exist')
        cy.wait(1000)
    })
})
