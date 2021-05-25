export interface AboutListInfo<T> {
    titles: [string, string[] | null][]
    content: T[] | undefined
}

export type PlaceholdersTypes
    = null
    | PartnersData
    | ValuesData
    | EnterData

// TODO update types

export interface PartnersData {
    title: string
    name: string
    text: string
    imageLeft: string
    imageTop: string
    siteUrl?: string
}

export interface ValuesData {
    number: number;
    title: string
    text: string
    image: string
    siteUrl?: string
}

export interface EnterData {
    trials: Record<string, string>
}


