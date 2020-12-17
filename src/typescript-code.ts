interface MyObj {
    name: string;
    age: number;
}

export function getObj(name: string, halfAge: number): MyObj {
    return {
        name,
        age: halfAge * 2
    };
}