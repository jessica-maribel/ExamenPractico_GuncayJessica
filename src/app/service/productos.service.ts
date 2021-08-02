import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Productos } from '../domain/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private afs: AngularFirestore) { }

  save (producto : Productos ){
    const refProductos = this.afs.collection("productos")
    if (producto.uid == null){
      //Si no existe identificador crea y asigna o refiera
      producto.uid = this.afs.createId();
      producto.activo = true;
    }

    refProductos.doc(producto.uid).set(Object.assign({},producto));
  }

   //Listar
   getProductos(): Observable<any[]>{
    return this.afs.collection("productos",
      //firebase no condiional and  
      //console.log(Productos);
    ref => ref.where("activo", "==", true)).valueChanges(); //devuelve en formato asincrono
  }
}
