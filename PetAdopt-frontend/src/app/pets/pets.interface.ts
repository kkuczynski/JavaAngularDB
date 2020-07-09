import { Spieces } from 'src/app/enums/spieces.enum';
import { Sex } from 'src/app/enums/sex.enum';
export interface PetsInterface {
    id: number;
    name: string;
    spieces: Spieces;
    race: string;
    age: number;
    addedAt: Date;
    health: string;
    sex: Sex;
    sterilized: boolean;
    adopted: boolean;
    adoptDate: Date;
    temporaryAdopted: boolean;
    tmpAdoptForDays: number;
}
