import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Router } from '@angular/router';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  lista: Produto[];

  constructor(private srv: ProdutoService, private route: Router) { }

  ngOnInit() {
    if (localStorage.getItem("isiToken")) {
      this.srv.getAllProdutos().subscribe(
        (res: Produto[]) => {
          this.lista = res;
        },
        (err) => {
          this.route.navigate(['/inicio']);
        }
      );
    }
    else {
      this.route.navigate(['/inicio']);
    }
  }

}
