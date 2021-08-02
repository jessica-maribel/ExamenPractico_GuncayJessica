import { Component, OnInit } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Productos } from 'src/app/domain/productos';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-listador',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  //producto : Observable<any>;
  producto : any;

  constructor(private router: Router,
    private productosService: ProductosService,
    private storage : AngularFireStorageModule) { 
  }
  ngOnInit() {
    this.producto = this.productosService.getProductos();
  }

  update(producto : Productos){
    //Crear variable 
    let params: NavigationExtras = {
      queryParams:{
        //nombre: nombre,
        //edad:15
        producto:producto
      }
    }
    this.router.navigate(['productos/crear'],params)
  }
/*
  filterList(evt :any){
    this.producto = this.productosService.getProductos();
    const searchTerms = evt.srcElement.value;
    console.log(searchTerms);

    if (!searchTerms){
      return;
    }

    this.producto = this.producto.pipe(

    map (items => 
    items.filter(item => item.nombre.toLowerCase().indexOf(searchTerms.toLowerCase()) > -1))
    )
  };
*/

}
