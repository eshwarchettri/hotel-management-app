import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[compare]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CompareValidatorsDirective, multi: true}]
})
export class CompareValidatorsDirective implements Validator {
  // tslint:disable-next-line:no-input-rename
  @Input('compare') controlNameToCompare: any;

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value.length < 1 || c.value === null) {
      return null;
    }
    const controlToCompare = c.root.get(this.controlNameToCompare);

    if (controlToCompare) {
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
        c.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }

    return controlToCompare && controlToCompare.value !== c.value ? {'compare': true } : null;
  }

}
