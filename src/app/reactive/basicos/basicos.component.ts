import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ 'RTX 4080ti', [ Validators.required, Validators.minLength(3) ] ],
    precio: [ '0', [ Validators.required, Validators.minLength(0) ] ],
    existencias: [ '0', [ Validators.required, Validators.minLength(0) ] ]
  })

  constructor( private fb: FormBuilder ) {

  }

  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 3000
    })
  }

  campoEsValido( campo: string ) {
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched
  }

  guardar() {
    if( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched()
      return
    }

    this.miFormulario.reset()
  }

}
