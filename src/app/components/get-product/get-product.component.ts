import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html'
})
export class GetProductoComponent implements OnInit {

  productos: Producto[];

  constructor(private productService: ProductoService,
    private router : Router) { }

  ngOnInit(): void {
    //cargamos los productos
    this.getProductos();

  }

  private getProductos() {
    //consumimos los datos del observable
    this.productService.getProducts().subscribe(
      //los datos se almacenan en la propiedad productos
      data => {
      this.productos = data;
    });
    }

    editProduct(id : number){
      this.router.navigate(['/edit-product', id]);
  }

  deleteProduct(id : number){
    this.productService.deleteProduct(id).subscribe(
      {
        next: () => this.getProductos(),
        error: err => console.log(err)
      }
    )
  }

}
