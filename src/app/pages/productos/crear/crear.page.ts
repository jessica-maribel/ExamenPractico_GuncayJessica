import { Component, OnInit } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Productos } from 'src/app/domain/productos';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'productos/crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  //Crear objeto
  producto: Productos = new Productos();
  uploadPercent : Observable<number>
  urlImagen: Observable<string>;
  constructor(private route: ActivatedRoute,
    private router:Router,
    private productosService : ProductosService,
    private storage : AngularFireStorageModule) { 
      route.queryParams.subscribe(params =>{
        console.log(params)
        //this.nombre = params.nombre
        //this.nombre = params.edad
        this.producto= new Productos();
        //this.contacto = params.contacto;
        if (this.router.getCurrentNavigation().extras.queryParams){
          this.producto = this.router.getCurrentNavigation().extras.queryParams.producto;
          console.log(this.producto);
      }
      })
    }
    contador;
  ngOnInit() {
  }

  save(){
    console.log(this.producto);
    this.productosService.save(this.producto);
    this.router.navigate(['productos/listado']);
  }

  update(cnt:any){
    this.contador=cnt;
    console.log(cnt);
  }

  onUpload(e) {
    console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.file[0];
    const filePath = 'uploads/profile_'+id;
    /*
    const ref = this.storage.ref(filePath);
    const task = this.storage.uploads(filePath, file);
    //(filePath);

    ///Para recuperar la imagen
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImagen = ref.getDownloadURL())).subscribe();
*/
  }
}
