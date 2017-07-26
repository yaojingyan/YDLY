import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {TraindetailPage} from "../traindetail/traindetail";
import {FenleiPage} from "../fenlei/fenlei";

@Component({
  selector: 'page-train',
  templateUrl: 'train.html',
})
export class TrainPage  implements OnInit{
  fenlei = '';
  trains = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http
  ) {
    this.fenlei = navParams.get('fenlei');
    // console.log(this.fenlei);

  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TrainPage');
  // }

  //初始化状态
  ngOnInit():void{
      this.http.get('http://localhost:3000/train')
        .toPromise()
        .then((res)=>{
          let result = res.json();
          if(result.success){
            this.trains = result.data;
          }
        })
  }

  //向下一个页面传参：对象
  itemSelected(params?:Object){
    this.navCtrl.push(TraindetailPage,{item:params});
  }

  //跳转到分类页面
  getFenlei(){
    this.navCtrl.push(FenleiPage);
  }

  //判断是否选中内容筛选出内容
  ionViewWillEnter()
  {
    if(this.fenlei!='' && this.fenlei !='全部')
    {
      //  第二种方法
      // this.http.post('http://localhost:3000/fenlei',{fl:this.fenlei})
      //最佳解决方法
      this.http.get('http://localhost:3000/fenlei',
        {params:{fl:this.fenlei}})
        .toPromise()
        .then((res)=>{
          let result = res.json();
          if(result.success){
            this.trains = result.data;
          }
        })
    }
  }
}
