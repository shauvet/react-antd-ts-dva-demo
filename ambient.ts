// declare var require: {
//     <T>(path: string): T;
//     (paths: string[], callback: (...modules: any[]) => void): void;
//     ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
// }
declare FileRequire {
    (url: string):any
}

declare var require: FileRequire;