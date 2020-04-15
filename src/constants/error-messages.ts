export abstract class Errors {
  static getMessage(errors: any): string {
    for (const error of Object.keys(errors)) {
      const requiredLength = errors[error].requiredLength || '';
      return `${messages[error]} ${requiredLength}`;
    }
  }
}

const messages = {
  required: 'This field is required',
  min: 'The value should be greather than ',
  max: 'The value should be lower than ',
  maxlength: 'The length should be lower than',
  minlength: 'The length should be greater than',
  email: 'Format of email is wrong',
  pattern: 'This field is invalid',
  mismatch: 'The passwords are not the same',
  password: 'Should be at least one uppercase letter, one lowercase letter and one number'
};
