import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeVowel'
})
export class ChangeVowelPipe implements PipeTransform {

  transform(ch: string) {
    let v = ["a", "e", "i", "u", "o", "y", "A", "E", "I", "U", "O", "Y"];
    let result = "";
    for (let i = 0; i < ch.length; i++) {
      let x = ch[i];
      for (let j = 0; j < v.length; j++) {
        if (ch[i] == v[j]) {
          x = "*";
          break;
        }

      }
      result = result + x;
    }
    return result;
  }

}
