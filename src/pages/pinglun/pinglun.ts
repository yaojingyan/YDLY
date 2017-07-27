import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";


@Component({
  selector: 'page-pinglun',
  templateUrl: 'pinglun.html',
})
export class PinglunPage {

  shuoshuo=[];
  shuju = [];
  user = [];
  id = '';
  nameid = '';
  cont = '';
  name = '';
  touimg = '';
  surl='assets/images/dianzan1.png';
  constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public http:Http
    )
  {

    this.id = navParams.get('id');
    this.nameid = navParams.get('nameid');
    this.name = navParams.get('name');
    this.touimg = navParams.get('touimg');
    this.http.post('http://localhost:3000/shuoshuo2',{id:this.id})
      .toPromise()
      .then((res)=>{

        if (res.json().success)
        {
          let result = res.json();
          this.shuoshuo = result.data;
          console.log(this.shuoshuo);
        }

      })

    this.http.post('http://localhost:3000/shuoshuo3',{id:this.id})
      .toPromise()
      .then((res)=>{

        if (res.json().success)
        {
          let result = res.json();
          this.shuju = result.data;
          console.log(this.shuju);
        }

      })
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad PinglunPage');
  }

  fasong()
  {
    this.http.post('http://localhost:3000/fasongpinglun',{nameid:this.nameid,toid:this.id,cont:this.cont,name:this.name,touimg:this.touimg})
      .toPromise()
      .then((res)=>{

        if (res.json().success)
        {
          this.http.post('http://localhost:3000/shuoshuo3',{id:this.id})
            .toPromise()
            .then((res)=>{

              if (res.json().success)
              {
                let result = res.json();
                this.shuju = result.data;
                console.log(this.shuju);
                this.cont = '';
              }

            })
        }

      })
  }

}
