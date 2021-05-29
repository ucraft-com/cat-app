export type Cat = {
    height: number,
    id: string,
    url: string,
    width: number
}

export type Category = {
    id: number,
    name: string,
    cats: Cat[]
}