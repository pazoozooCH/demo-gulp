import { exportFromJavaScript } from './javascript-code-for-typescript';

interface MyObj {
    name: string;
    age: number;
    import: string;
}

export function getObj(name: string, halfAge: number): MyObj {
    return {
        name,
        age: halfAge * 2,
        import: exportFromJavaScript
    };
}