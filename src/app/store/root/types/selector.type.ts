import { AppState } from './app-state.type';

export type Selector<T> = (state: AppState) => T;
