export class Slix extends Container {
  static this: Slix;
  static boot: boolean;
  public eventDispatcher: EventDispatcher;
  public dispatch: (typeEvent: string, event: AbstractEvent) => void;
  public addEventListener: (typeEvent: string, callback: () => void, priority: number, event: AbstractProvider) => void;

  constructor(__dir?: string);

  run(registration?: (app: Slix) => void, boot?: () => void, subscribe?: () => void, success?: () => void): void;

  addProviders(value: [{provider: AbstractProvider, params: object}]): void;

  _runControllers(route: string, request: SlixRequest): Promise<any>;

  _mount(route: string, method: string, handler: (request: SlixRequest, query: RequestQuery, post: RequestPost, file: RequestFile) => Response, controller?: AbstractController)

  _getController(request: SlixRequest);

  _runControllers(route: string, request: SlixRequest): Promise<Response>
}

export class Container {
  public providers: Map<string, AbstractProvider>;
  public params: Map<string, any>;

  registrationProvider(provider: AbstractProvider, params?: object): void;

  removeProvider(provider: AbstractProvider): void;

  getAllProviders(): [AbstractProvider];

  getAllParams(): [object];

  setParam(key: AbstractProvider, params: object): void;

  getParam(key: string): object;
}


export class AbstractProvider {
  private __nameProvider: string;

  registration(app: Slix): Promise<any>;

  boot(app: Slix): Promise<any>

  subscribe(app: Slix, eventDispatcher: EventDispatcher): Promise<any>

  success(app: Slix): Promise<any>

  getName(): string;

  static getName(): string;
}

export class EventDispatcher {
  private collection: Map<string, (event: AbstractEvent) => void>;

  dispatch(typeEvent: string, event: AbstractEvent): void;

  addEventListener(typeEvent: string, callback: () => void, priority: number, event: AbstractProvider): void;
}

export class AbstractEvent {
  public break: boolean;
  public request: SlixRequest;

  constructor(request: SlixRequest)
}

export class SlixRequest {
  public req: any;
  public url: string;
  public method: string;
  public contentType: string;
  public path: RequestPath;
  public header: RequestHeader;
  public cookie: RequestCookie;
  public query: RequestQuery;
  public body: RequestPost;
  public file?: RequestFile;
}

export class RequestPath {
  public full: string;
  public collection: Map<string, string>;

  parse(pattern: string, route: string, path: string): void;

  get(key: string): string | null

  has(key: string): boolean;

  all(): object;
}

export class RequestHeader extends AbstractHeader {
}

export class AbstractHeader {
  private headers: Object;

  constructor(request: SlixRequest);

  set(key: string, value: string): void;

  get(key: string): string | null;

  has(key: string): boolean;

  all(): object;
}

export class RequestCookie {
  constructor(request: SlixRequest);

  get(key: string): Cookie | null;

  has(key: string): boolean;

  all(): [Cookie];
}

export class Cookie {
  public name: string;
  public value: string | null;
  public expires: number;
  public path: string;
  public domain: string;
  public secure: boolean;
  public httpOnly: boolean;

  constructor(name: string, value?: string, expires?: number, path?: string, secure?: boolean, httpOnly?: boolean)

  raw(): string;
}

export class RequestQuery {
  public full: string;
  public collection: Map<string, string>;

  constructor(request: SlixRequest);

  get(key: string): string | null;

  has(key: string): boolean;

  all(): object;
}

export class RequestPost {
  public collection: Map<string, RequestPost>;

  constructor(request: SlixRequest);

  get(key: string): string | null;

  getOriginal(key: string): RequestPostData | null;

  has(key: string): boolean;
}

export class RequestPostData {
  public name: string;
  public data: string;
}

export class RequestFile {
  public collection: Map<string, RequestFileData>;

  save(key: string, path: string, filename: string);
}

export class RequestFileData {
  public name: string;
  public filename: string;
  public typeContent: string;
  public buffer: any;

  constructor(name: string, filename: string, typeContent: string, buffer: any);

  save(path: string, filename: string): void;
}

export class AbstractController {
  public app: Slix;

  before(request: Slix): Promise<Response>;

  after(request: Slix): Promise<Response>;

  mount(): void;

  ALL(route: string, handler: (request: SlixRequest, query: RequestQuery, post: RequestPost, file: RequestFile) => Response)

  GET(route: string, handler: (request: SlixRequest, query: RequestQuery, post: RequestPost, file: RequestFile) => Response)

  POST(route: string, handler: (request: SlixRequest, query: RequestQuery, post: RequestPost, file: RequestFile) => Response)

  HEAD(route: string, handler: (request: SlixRequest, query: RequestQuery, post: RequestPost, file: RequestFile) => Response)

  DELETE(route: string, handler: (request: SlixRequest, query: RequestQuery, post: RequestPost, file: RequestFile) => Response)

  CONNECT(route: string, handler: (request: SlixRequest, query: RequestQuery, post: RequestPost, file: RequestFile) => Response)

  OPTIONS(route: string, handler: (request: SlixRequest, query: RequestQuery, post: RequestPost, file: RequestFile) => Response)

  TRACE(route: string, handler: (request: SlixRequest, query: RequestQuery, post: RequestPost, file: RequestFile) => Response)
}

export class Response {
  public headers: ResponseHeader;
  public content: string;
  public statusCode: number;
  public encoding: string;

  static HTTP_CONTINUE: number;
  static HTTP_SWITCHING_PROTOCOLS: number;
  static HTTP_PROCESSING: number;
  static HTTP_EARLY_HINTS: number;
  static HTTP_OK: number;
  static HTTP_CREATED: number;
  static HTTP_ACCEPTED: number;
  static HTTP_NON_AUTHORITATIVE_INFORMATION: number;
  static HTTP_NO_CONTENT: number;
  static HTTP_RESET_CONTENT: number;
  static HTTP_PARTIAL_CONTENT: number;
  static HTTP_MULTI_STATUS: number;
  static HTTP_ALREADY_REPORTED: number;
  static HTTP_IM_USED: number;
  static HTTP_MULTIPLE_CHOICES: number;
  static HTTP_MOVED_PERMANENTLY: number;
  static HTTP_FOUND: number;
  static HTTP_SEE_OTHER: number;
  static HTTP_NOT_MODIFIED: number;
  static HTTP_USE_PROXY: number;
  static HTTP_RESERVED: number;
  static HTTP_TEMPORARY_REDIRECT: number;
  static HTTP_PERMANENTLY_REDIRECT: number;
  static HTTP_BAD_REQUEST: number;
  static HTTP_UNAUTHORIZED: number;
  static HTTP_PAYMENT_REQUIRED: number;
  static HTTP_FORBIDDEN: number;
  static HTTP_NOT_FOUND: number;
  static HTTP_METHOD_NOT_ALLOWED: number;
  static HTTP_NOT_ACCEPTABLE: number;
  static HTTP_PROXY_AUTHENTICATION_REQUIRED: number;
  static HTTP_REQUEST_TIMEOUT: number;
  static HTTP_CONFLICT: number;
  static HTTP_GONE: number;
  static HTTP_LENGTH_REQUIRED: number;
  static HTTP_PRECONDITION_FAILED: number;
  static HTTP_REQUEST_ENTITY_TOO_LARGE: number;
  static HTTP_REQUEST_URI_TOO_LONG: number;
  static HTTP_UNSUPPORTED_MEDIA_TYPE: number;
  static HTTP_REQUESTED_RANGE_NOT_SATISFIABLE: number;
  static HTTP_EXPECTATION_FAILED: number;
  static HTTP_I_AM_A_TEAPOT: number;
  static HTTP_MISDIRECTED_REQUEST: number;
  static HTTP_UNPROCESSABLE_ENTITY: number;
  static HTTP_LOCKED: number;
  static HTTP_FAILED_DEPENDENCY: number;
  static HTTP_RESERVED_FOR_WEBDAV_ADVANCED_COLLECTIONS_EXPIRED_PROPOSAL: number;
  static HTTP_TOO_EARLY: number;
  static HTTP_UPGRADE_REQUIRED: number;
  static HTTP_PRECONDITION_REQUIRED: number;
  static HTTP_TOO_MANY_REQUESTS: number;
  static HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE: number;
  static HTTP_UNAVAILABLE_FOR_LEGAL_REASONS: number;
  static HTTP_INTERNAL_SERVER_ERROR: number;
  static HTTP_NOT_IMPLEMENTED: number;
  static HTTP_BAD_GATEWAY: number;
  static HTTP_SERVICE_UNAVAILABLE: number;
  static HTTP_GATEWAY_TIMEOUT: number;
  static HTTP_VERSION_NOT_SUPPORTED: number;
  static HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL: number;
  static HTTP_INSUFFICIENT_STORAGE: number;
  static HTTP_LOOP_DETECTED: number;
  static HTTP_NOT_EXTENDED: number;
  static HTTP_NETWORK_AUTHENTICATION_REQUIRED: number;

  constructor(content?: string, statusCode?: number, headers?: object);

  setContentType(type: string): void;
}

export class JsonResponse extends Response {
  constructor(content: string | object);
}

export class RedirectResponse extends Response {
  constructor(url: string, statusCode?: number, headers?: object)
}

export class FileResponse extends Response {
  constructor(content: string, contentType: string)
}

export class PreparationResponse {
  public res: any;

  setResponse(response: Response | JsonResponse | RedirectResponse | FileResponse): void;
}

export class ResponseHeader extends AbstractHeader {
  public cookies: [Cookie];

  constructor(headers: object);

  setCookie(cookie: Cookie): void;

  hasCookie(key: string): boolean;

  getCookie(key: string): Cookie | null;

  removeCookie(key: string): void;

  getAllCookies(): [Cookie];

  preparationHeaders(): [][];
}

export class KernelEvents {
  static REQUEST: string;
  static ROUTE: string;
  static CALL_CONTROLLER: string;
  static CONTROLLER_ARGUMENTS: string;
  static RENDERING_PREPARATION: string;
  static RESPONSE: string;
  static TERMINATE: string;
  static EXCEPTION: string;
}