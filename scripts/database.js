export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Convoleech",
            power: "Boring Conversations"
        },
        {
            id: 2,
            name: "Hypospeed",
            power: "So slow you think they're a statue"
        },
        {
            id: 3,
            name: "Interester",
            power: "Gives you really bad interest rates"
        },
        {
            id: 4,
            name: "The Wrinkler",
            power: "Can put wrinkles into super-suits"
        }
    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}