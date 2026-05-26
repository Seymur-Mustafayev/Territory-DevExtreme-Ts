export interface Region {
    name: string;
    code: string;
}

export const regionLookups: Region[] = [
    { name: "North Region", code: "NR" },
    { name: "South Region", code: "SR" },
    { name: "East Region", code: "ER" },
    { name: "West Region", code: "WR" }
]