// let virtualPet1Name = "Testy";
// const setVirtualPet1Name = function (name) {
//     virtualPetName = name;
// }

// let virtualPet1Hunger = 50;

// const feedVirtualPet1 = function () {
//     virtualPetHunger -= 10;
// }

// feedVirtualPet1()
// --------------------------------------------------------------------------
class VirtualPet {

    constructor(name) {
        this._hunger = 50;
        this._name = name;
    }

    feed() {
        this._hunger -= 10;
    }

    get hunger() {
        return this._hunger;
    }

    get name() {
        return this._name;
    }

}

const sample = new VirtualPet("Tester");
// virtualPetObject.name