import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent implements OnInit {
producto : Producto = new Producto();
  constructor(private productoServicio: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.productoServicio.addProduct(this.producto).subscribe(
     {
      next: (datos) => {
      this.irAProductos();
     },
     error: (error) => {console.log(error);}
  })
  }

  irAProductos(){
    this.router.navigate(['/productos']);
  }
}
