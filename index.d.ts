type ActionCreator = (payload?: any) => { type: string, payload?: any };

export function createTypesAndActions<T extends string>(
  namespace: string,
  types: T[]
): { types: { [K in T]: string }, actions: { [K in T]: ActionCreator } }

type AsyncDict<T, P extends string> = { [K in P]: T };
type DefaultPhases = 'request' | 'success' | 'failure';

export function createAsyncTypesAndActions<T extends string>(
  namespace: string,
  types: T[],
): { types: { [K in T]: AsyncDict<string, DefaultPhases> }, actions: { [K in T]: AsyncDict<ActionCreator, DefaultPhases> } }

export function createAsyncTypesAndActions<T extends string, P extends string>(
  namespace: string,
  types: T[],
  options: { phases: P[] },
): { types: { [K in T]: AsyncDict<string, P> }, actions: { [K in T]: AsyncDict<Action, P> } }
