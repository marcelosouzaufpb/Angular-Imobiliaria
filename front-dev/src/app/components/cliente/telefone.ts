export class Telefone {
    constructor(
        private _numero: string,
        private _dd: string,
    ) { }

    public get numero(): string {
        return this._numero;
    }

    public get dd(): string {
        return this._dd;
    }

    public set numero(v: string) {
        this._numero = v;
    }

    public set dd(v: string) {
        this._dd = v;
    }
}