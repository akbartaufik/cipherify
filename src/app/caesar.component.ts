import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caesar',
  templateUrl: './caesar.component.html',
  styleUrls: ['./caesar.component.css']
})
export class CaesarComponent {

  plain: string = '';
  cipher: string = '';

  // abjad = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\x0b\x0c';
  abjad = 'abcdefghijklmnopqrstuvwxyz';

  enkrip(plain: any, key: number) {
    plain = plain.toLowerCase().replace(/[^a-z]/g, "");
    this.cipher = '';

    for (let i in plain) {
      if (this.abjad.indexOf(plain[i]) != -1) {
        let k = this.abjad.indexOf(plain[i]);
        k = (k + key);
        let f = ((k % this.abjad.length) + this.abjad.length) % this.abjad.length;

        this.cipher = this.cipher + this.abjad[f];

      } else {
        this.cipher = this.cipher + plain[i];
      }
    }

  }

  dekrip(cipher: any, key: number) {
    this.plain = '';
    cipher = cipher.toLowerCase().replace(/[^a-z]/g, "");
    for (let i in cipher) {
      if (this.abjad.indexOf(cipher[i]) != -1) {
        let k = this.abjad.indexOf(cipher[i]);
        k = (k - key);
        let f = ((k % this.abjad.length) + this.abjad.length) % this.abjad.length;
        if (this.abjad[k] === 'undefined') {
          this.plain = this.plain + ' ';
        } else {
          this.plain = this.plain + this.abjad[f];
        }

      }
    }
  }

}
