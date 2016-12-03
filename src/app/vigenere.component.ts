import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-vigenere',
  templateUrl: './vigenere.component.html',
  styleUrls: ['./vigenere.component.css']
})
export class VigenereComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  letter = 'abcdefghijklmnopqrstuvwxyz';
  // letter = this.letter.toLowerCase().replace(/[^a-z]/g, "");
  // letter = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\x0b\x0c';
  cipher = '';
  plain = '';
  //encrypt vigenere cipher
  enkrip(plaintext: any, key: any) {
    this.cipher = '';
    plaintext = plaintext.toLowerCase().replace(/[^a-z]/g, "");
    key = key.toLowerCase().replace(/[^a-z]/g, "");
    let plain: any = plaintext;
    let key_temp = '';


    let key_final = key;
    // for (let i in plaintext){
    //   if(this.letter.indexOf(plaintext[i]) != -1){
    //     plain = plain + plaintext[i];
    //   }else{
    //     plain = plain + '';
    //   }
    //
    // }
    // for (let i in key){
    //     if (key[i] == ' '){
    //       alert('Kunci tidak boleh lebih dari satu kata!');
    //       return;
    //     }
    // }

    let loop = Math.ceil(plain.length / key_final.length);
    for (let i = 0; i < loop; i++) {
      key_temp = key_temp + key_final;
    }
    key_final = key_temp.slice(0, plain.length);

    for (let i in plain) {
      if (this.letter.indexOf(plain[i]) != -1) {
        let j = this.letter.indexOf(plain[i]);
        let k = this.letter.indexOf(key_final[i]);
        let f = (j + k);
        let final = ((f % this.letter.length) + this.letter.length) % this.letter.length;

        this.cipher = this.cipher + this.letter[final];
      } else {
        this.cipher = this.cipher + plaintext[i];
      }
    }

  }

  //Decrypt vigenere cipher
  dekrip(cipher: any, key: any) {
    this.plain = '';
    cipher = cipher.toLowerCase().replace(/[^a-z]/g, "");
    key = key.toLowerCase().replace(/[^a-z]/g, "");
    let cipher_temp: any = cipher;
    let key_temp = '';

    let key_final = key;
    console.log(cipher);
    console.log(key);
    // for (let i in cipher){
    //   if(this.letter.indexOf(cipher[i]) != -1){
    //     cipher_temp = cipher_temp + cipher[i];
    //   }else{
    //     cipher_temp = cipher_temp + '';
    //
    //
    //   }
    //
    // }
    console.log('temp' + cipher_temp);

    let loop = Math.ceil(cipher_temp.length / key_final.length);
    for (let i = 0; i < loop; i++) {
      key_temp = key_temp + key_final;
    }
    key_final = key_temp.slice(0, cipher_temp.length);

    for (let i in cipher_temp) {
      if (this.letter.indexOf(cipher_temp[i]) != -1) {
        let j = this.letter.indexOf(cipher_temp[i]);
        let k = this.letter.indexOf(key_final[i]);
        let f = (j - k);
        let final = ((f % this.letter.length) + this.letter.length) % this.letter.length;
        this.plain = this.plain + this.letter[final];
      } else {
        this.plain = this.plain + cipher[i];
      }
    }
  }


}
