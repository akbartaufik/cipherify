import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-transpose',
  templateUrl: './transpose.component.html',
  styleUrls: ['./transpose.component.css']
})
export class TransposeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  ciphertext = "";
  plaintext = '';
  pc = 'x';

  enkrip(plaintext, key, pc) {
    this.ciphertext = '';
    plaintext = plaintext.toLowerCase().replace(/[^a-z]/g, "");
    if (plaintext.length < 1) {
      alert("please enter some plaintext");
      return;
    }
    key = key.toLowerCase().replace(/[^a-z]/g, "");
    pc = pc.toLowerCase().replace(/[^a-z]/g, "");
    if (pc == "") {
      pc = "x";
    }
    while (plaintext.length % key.length != 0) {
      plaintext += pc.charAt(0);
    }
    var colLength = plaintext.length / key.length;
    var chars = "abcdefghijklmnopqrstuvwxyz";

    let k = 0;
    for (let i = 0; i < key.length; i++) {
      while (k < 26) {
        var t = key.indexOf(chars.charAt(k));
        let arrkw = key.split("");
        arrkw[t] = "_";
        key = arrkw.join("");
        if (t >= 0) break;
        else k++;
      }
      for (let j = 0; j < colLength; j++) {
        this.ciphertext += plaintext.charAt(j * key.length + t);
      }
    }
    console.log(this.ciphertext);
  }

  dekrip(ciphertext, key) {
    this.plaintext = '';
    ciphertext = ciphertext.toLowerCase().replace(/[^a-z]/g, "");
    if (ciphertext.length < 1) {
      alert("please enter some ciphertext (letters only)");
      return;
    }
    let keyword = key.toLowerCase().replace(/[^a-z]/g, "");
    let klen = keyword.length;
    if (klen <= 1) {
      alert("keyword should be at least 2 characters long");
      return;
    }
    if (ciphertext.length % klen != 0) {
      alert("ciphertext has not been padded, the result may be incorrect (incorrect keyword?).");
    }
    // first we put the text into columns based on keyword length
    var cols = new Array(klen);
    var colLength = ciphertext.length / klen;
    for (let i = 0; i < klen; i++) cols[i] = ciphertext.substr(i * colLength, colLength);
    // now we rearrange the columns so that they are in their unscrambled state
    var newcols = new Array(klen);
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let j = 0;
    let i = 0;
    while (j < klen) {
      let t = keyword.indexOf(chars.charAt(i));
      if (t >= 0) {
        newcols[t] = cols[j++];
        let arrkw = keyword.split("");
        arrkw[t] = "_";
        keyword = arrkw.join("");
      } else i++;
    }
    // now read off the columns row-wise
    this.plaintext = "";
    for (let i = 0; i < colLength; i++) {
      for (let j = 0; j < klen; j++) this.plaintext += newcols[j].charAt(i);
    }
    console.log(this.plaintext);
  }


}
