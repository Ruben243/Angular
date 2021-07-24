import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article!: Article;
  public url: string
  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article
          } else {
            this._router.navigate(['/home']);
          }

        },
        error => {
          console.error(error);
          this._router.navigate(['/home']);

        }
      )

    });

  }

  delete(id: string) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'El artículo se eliminará permanentemente',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        this._articleService.delete(id).subscribe(
          (response) => {
            this._router.navigate(['/blog']);
          },
          (error) => {
            console.log(error);
            this._router.navigate(['/blog']);
          }
        );

        Swal.fire('Artículo borrado', 'El artículo ha sido borrado', 'success');
      } else {
        Swal.fire('Operación cancelada', 'El artículo no ha sido borrado');
      }
    });
  }

}