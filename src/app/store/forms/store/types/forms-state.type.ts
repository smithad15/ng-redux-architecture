/**
 * Describes the shape of all forms in the application. This should be expanded
 * as new forms are hooked up with redux using the `connect` directive
 */
import { TemplateFormState } from '../../../../template-form/template-form.type';

export interface FormsState {
  readonly template: TemplateFormState;
}
