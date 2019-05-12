/// <reference no-default-lib="true"/>
/// <reference lib="es2015" />

interface AbstractProvider {

}

interface Container {
    providers: Map<string, AbstractProvider>
    params: Map<string, object>

    registrationProvider(provider: AbstractProvider, params: Object): void
}

interface ContainerConstructor {
    new(): Container;
}

declare var Container: ContainerConstructor;

interface Slix extends Container {
    new(): string

    run(): void;
}

interface SlixConstructor {
    new(): Slix
}

declare var Slix: SlixConstructor;
