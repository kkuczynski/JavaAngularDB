export class AdoptionHousesExternal {
    id: number;
    address: string;
    city: string;
    postcode: string;
    userId: number;
    conditions: string;

    // Nie wiem po co ci to do komunikacji z backendem :?
    setNew(address: string, city: string, postcode: string, conditions: string) {
        this.address = address;
        this.city = city;
        this.postcode = postcode;
        this.conditions = conditions;
    }
    // Nie wiem po co ci to do komunikacji z backendem :?
    setId(id: number) {
        this.id = id;
    }
    // Nie wiem po co ci to do komunikacji z backendem :?
    setOwnerId(id: number) {
        this.userId = id;
    }
}
