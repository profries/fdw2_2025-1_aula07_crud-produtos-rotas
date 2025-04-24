import { Component, Input } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-tabela-produtos',
  standalone: false,
  templateUrl: './tabela-produtos.component.html',
  styleUrl: './tabela-produtos.component.css'
})
export class TabelaProdutosComponent {
  nomePesquisa?: string;
  lista: Produto[] = [];

  constructor(private produtoService: ProdutoService){
    this.lista = this.produtoService.listar();
  }
}
