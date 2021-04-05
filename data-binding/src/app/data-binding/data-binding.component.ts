import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://junior.com'
  cursoAngular: boolean = true;
  urlImagem = 'https://image.freepik.com/vetores-gratis/jogo-joystick-tecnologia-esportiva_138676-2045.jpg';


  
  valorAtual: string = '';

  formulario: boolean = false;
  

  getValor() {
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClick() {
    alert('Clickado!!!')
  }



  onSubmit() {
    this.formulario = true;
  }

 




  constructor() { }

  ngOnInit(): void {
  }

}
