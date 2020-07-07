export interface PetsInterface {
    id: number;
    name: string;
    spieces: string;
    race: string;
    age: number;
    addedAt: Date;
    health: string;
    sex: string;
    sterilized: boolean;
    adopted: boolean;
    adoptDate: Date;
    temporaryAdopted: boolean;
    tmpAdoptForDays: number;
}
