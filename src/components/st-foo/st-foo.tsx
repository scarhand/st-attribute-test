import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'st-foo',
  shadow: true
})
export class Foo {
  @Prop({ attribute: 'valid' }) isValid: boolean;

  render() {
    return this.isValid ? "true" :  "false";
  }
}
