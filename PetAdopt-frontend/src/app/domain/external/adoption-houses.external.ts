export class AdoptionHousesExternal {
    id: number;
    address: string;
    city: string;
    postcode: string;
    userId: number;
    conditions: string;

    setNew(address: string, city: string, postcode: string, conditions: string) {
        this.address = address;
        this.city = city;
        this.postcode = postcode;
        this.conditions = conditions;
    }

    setId(id: number) {
        this.id = id;
    }

    setOwnerId(id: number) {
        this.userId = id;
    }
}
