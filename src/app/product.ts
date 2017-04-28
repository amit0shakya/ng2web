import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
 selector:'product',
 template:`Requested Product id is= {{productid}}`
})

export class Product{

  productid:string;
    
    constructor(private route:ActivatedRoute){
        this.productid=route.snapshot.params['id']
    }
}