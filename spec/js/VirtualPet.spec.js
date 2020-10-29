/*
- Name
- Hunger
- Boredom

- Feed
- Play

*/

describe('Virtual Pets have a name', () => {

    it('Given a name, virtual pet save that name.', () => {
        const underTest = new VirtualPet("Testy");
        expect(underTest.name).toBe("Testy");
    });
    it('Given another name, sets the name', () => {
        const underTest = new VirtualPet("Bilbo");
        expect(underTest.name).toBe("Bilbo");
    })
});

describe('VirtualPets have hunger and can be fed.', () => {
    it('Should have a default hunger of 50', () => {
        // Arrangement/Action
        const underTest = new VirtualPet("Ben");
        // Assertion
        expect(underTest.hunger).toBe(50);
    });

    it('Should decrease hunger by ten when feed() is called', () => {
        // Arrangement
        const underTest = new VirtualPet("Ben");
        // Action
        underTest.feed();
        // Assertion
        expect(underTest.hunger).toBe(40);
    });
});