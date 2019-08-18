import 'next';
import { Store } from 'redux';
declare module 'next' {
  export interface NextPageContext {
    reduxStore: Store;
    err?:
      | Error & {
          statusCode?: number;
        }
      | null;
    req?: IncomingMessage;
    res?: ServerResponse;
    pathname: string;
    query: ParsedUrlQuery;
    asPath?: string;
    ctx: {
      query: any;
    };
  }
}
