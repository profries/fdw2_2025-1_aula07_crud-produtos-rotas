import { Component, EventEmitter, Output } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-form-produtos',
  standalone: false,
  templateUrl: './form-produtos.component.html',
  styleUrl: './form-produtos.component.css'
})
export class FormProdutosComponent {
  produto = new Produto();

  constructor(private produtoService: ProdutoService) {

  }

  cadastrarProduto(){ 
    this.produtoService.inserir(this.produto);
    alert("Produto cadastrado com sucesso!")
    this.produto = new Produto();
  }
}
