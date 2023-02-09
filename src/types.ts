export interface ICharacter {
    name: string
    image: string
    status: string
    species: string
}

export interface ILocation {
    name: string
    type: string
    dimension: string
}

export interface ILocationResidence {
    residents: Array<string>
}

export interface IResident {
}