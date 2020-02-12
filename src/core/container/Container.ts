export class Container {

    private container: Map<string, any>;

    constructor() {
        this.container = new Map<string, any>();
    }

    public set(key: string, value: any): Container {
        if (!this.has(key)) {
            this.container.set(key, value);
        }

        return this;
    }

    public get(key: string): any {
        return this.container.get(key);
    }

    public has(key: string): any {
        return this.container.has(key);
    }

    public replace(key: string, value: any): Container {
        this.container.set(key, value);

        return this;
    }
}

