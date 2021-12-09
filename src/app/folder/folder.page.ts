import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public sayi1: string="0";
  public ilkSayi=null;
  public deger: number=0;  //v
  public sayac: boolean=false;
  public operator= null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  sayi(deger:string){
    if(this.sayac){
      this.sayi1=deger;
      this.sayac=false;
    } else {
      this.sayi1 === '0' ? this.sayi1 = deger: this.sayi1 += deger;
    }
     console.log(this.sayi1);
  }
  calculater(islem, ikinciSayi){
    switch(islem){
        case "+" : return this.ilkSayi += ikinciSayi;
        case "-" : return this.ilkSayi -= ikinciSayi;
        case "/" : return this.ilkSayi /= ikinciSayi;
        case "*" : return this.ilkSayi *= ikinciSayi;
        case "=" : return ikinciSayi;
    }

    
  }
  islemYap(islem:string){
    if(this.ilkSayi===null){
      this.ilkSayi=Number(this.sayi1);
    } else if(this.operator){
      const sonuc = this.calculater(this.operator,Number(this.sayi1));
      this.sayi1=String(sonuc);
      this.ilkSayi=sonuc;
    }
    this.sayac=true
    this.operator=islem;
    console.log(islem);
  }

  temizle(){
    this.sayi1="0";
    this.ilkSayi=null;
    this.deger=0;  //v
    this.sayac=false;

  }

  noktaliVirgul(){
    if(!this.sayi1.includes('.')){
      this.sayi1 += '.'; 
  }
  }
}
