import { ApiState } from '../../api';
import { FormsState } from '../../forms';

export interface AppState {
  readonly api?: ApiState;
  readonly template?: any;
  readonly route?: string;
}
