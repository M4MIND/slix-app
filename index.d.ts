export class Slix extends Container {
  static this: Slix;
  static boot: boolean;

  constructor(__dir?: string);

  run(): Promise<any>;

  addProviders(value: []);
}

export class Container {
  
}