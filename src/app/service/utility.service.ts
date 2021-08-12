import { AbstractControl } from '@angular/forms';
export class Utility {

  static isUndefinedOrNull(param: any): any {
    return param === undefined || param === null || param === 'null' || param === 'undefined';
  }

  static isUndefinedOrNullOrEmpty(param: any): any {
    return param === undefined || param === null || param === 'null' || param === 'undefined' || param === '' || param.toString().trim() === '';
  }

  static removeNullProperties(obj: any): any {
    Object.keys(obj).forEach(
      key => {
        if (obj[key] && typeof obj[key] === 'object') {
          this.removeNullProperties(obj[key]);
        } else if (obj[key] == null || obj[key] === '') {
          delete obj[key];
        }
      }
    );
    return obj;
  }
}
