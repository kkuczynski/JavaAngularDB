import { Spieces } from '../enums/spieces.enum';
import { Sex } from '../enums/sex.enum';

export class PetsExternal {
    id: number;
    name: string;
    spieces: Spieces;
    race: string;
    age: number;
    addedAt: string;
    health: string;
    sex: Sex;
    sterilized: boolean;
    adopted: boolean;
    adoptDate: string;
    temporaryAdopted: boolean;
    tmpAdoptForDays: number;
    houseId: number;
    // Nie wiem po co ci to do komunikacji z backendem :?
    setNew(name: string, spieces: Spieces, race: string, age: number,
        addedAt: string, health: string, sex: Sex, sterilized: boolean, adopted: boolean,
        temporaryAdopted: boolean, adoptDate?: string, tmpAdoptForDays = 0) {
        this.name = name;
        this.spieces = spieces;
        this.race = race;
        this.age = age;
        this.addedAt = addedAt;
        this.health = health;
        this.sex = sex;
        this.sterilized = sterilized;
        this.adopted = adopted;
        this.adoptDate = adoptDate ? adoptDate : '';
        this.temporaryAdopted = temporaryAdopted;
        this.tmpAdoptForDays = tmpAdoptForDays;
    }
    // Nie wiem po co ci to do komunikacji z backendem :?
    setId(id: number) {
        this.id = id;
    }
    // Nie wiem po co ci to do komunikacji z backendem :?
    getId() {
        return this.id;
    }
    // Nie wiem po co ci to do komunikacji z backendem :?
    setHouseId(id: number) {
        this.houseId = id;
    }


}
