import type { IFieldValue } from './field';

export type TDebitCardFieldName = 'cvv' | 'expireDate' | 'pan';

export type TDebitCardForm = Record<TDebitCardFieldName, IFieldValue>;
