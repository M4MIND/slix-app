export class Slix extends Container {
  static this: Slix;
  static boot: boolean;

  constructor(__dir?: string);

  run(registration?: (app: Slix) => void, boot?: () => void, subscribe?: () => void, success?: () => void): void;

  addProviders(value: [{provider: AbstractProvider, params: object}]): void;
}

export class Container {
  public providers: Map<string, AbstractProvider>;
  public params: Map<string, any>;

  registrationProvider(provider: AbstractProvider, params?: object): void;

  removeProvider(provider: AbstractProvider): void;

  getAllProviders(): [AbstractProvider];

  getAllParams(): [object];

  setParam(key: AbstractProvider, params: object): void;

  getParam(key: string): void;
}


export class AbstractProvider {

}