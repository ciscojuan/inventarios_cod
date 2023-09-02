import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent implements OnInit {

  producto : Producto = new Producto();
  producto_id : number;

  constructor(private productoService: ProductoService,
              private ruta : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {

    this.producto_id = this.ruta.snapshot.params['id'];
    this.productoService.getProduct(this.producto_id).subscribe(
      {
        next : (data: any) =>
          this.producto = data
          ,
          error : (err : any) =>
            console.log(err)
      }
    )

  }

  onSubmit(){
    this.guardarProducto();

  }

   guardarProducto(){
    this.productoService.editProduct(this.producto_id, this.producto).subscribe(
      {
        next : (data) => this.router.navigate(['/products']),
        error : (err) => console.log(err)
      }
    )}
}
