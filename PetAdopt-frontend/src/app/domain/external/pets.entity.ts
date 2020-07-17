import { Spieces } from '../enums/spieces.enum';
import { Sex } from '../enums/sex.enum';
import { RaceOperator } from 'rxjs/internal/observable/race';
export class PetsEntity {
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

    setNew(name: string, spieces: Spieces, race: string, age: number,
           addedAt: string, health: string, sex: Sex, sterilized: boolean, adopted: boolean,
           temporaryAdopted: boolean, adoptDate?: string, tmpAdoptForDays = 0){
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

    setId(id: number){
        this.id = id;
    }
    getId(){
        return this.id;
    }


}
