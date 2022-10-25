import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appRegexValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: RegexValidatorDirective, multi: true}]
})
export class RegexValidatorDirective implements Validator {
  @Input('appRegexValidator') regExp: RegExp;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const result = this.regExp.test(control.value);
    return result ? null : {'regExpInvalid': { value: control.value }}
  }

}
