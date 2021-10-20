import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ 'Arnold', [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array([
      [ 'Metal Gear', Validators.required ],
      [ 'Death Stranding', Validators.required ],
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  constructor(private fb: FormBuilder) { }

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray
  }

  campoEsValido( campo: string ) {
    return this.miFormulario.controls[campo].errors && 
           this.miFormulario.controls[campo].touched
  }

  agregarFavorito() {
    if( this.nuevoFavorito.invalid ) return
    
    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) )
    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) )
    
    this.nuevoFavorito.reset()
  }

  eliminarFavorito( index: number ) {
    this.favoritosArr.removeAt(index)
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
    }
    console.log(this.miFormulario.valid)
  }

}
