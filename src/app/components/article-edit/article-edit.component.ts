import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import  Swal from 'sweetalert2';


@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new//article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {
  public article!: Article
  public status!: string;
  public is_Edit: boolean;
  public page_title: string;
  public url: string;
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png .gif .jpeg",
    maxSize: 50,
    uploadAPI: {
      url: Global.url + 'upload-image',
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube una imagen para el articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('', '', '', '', null);
    this.is_Edit = true;
    this.page_title = "Editar Articulo";
    this.url = Global.url;
  }


  ngOnInit() {
    this.getArticle();
  }

  onSubmit() {
    this._articleService.update(this.article._id, this.article).subscribe(


      response => {

        if (response.status == 'sucess') {
          this.status = 'sucess';
          this.article = response.article;
          Swal.fire(  'Articulo editado',  'El articulo se ha editado correctamente',  'success')

          this._router.navigate(['/blog/articulo', this.article._id]);
        } else {
          this.status = 'error';
        }

      },
      error => {
        console.error(error);
        this.status = 'error'
        Swal.fire(  'Edicion fallida',  'El articulo no  se ha editado correctamente',  'error')

      })
  }



  imageUpload(data: any) {
    let image_data = data.body.image
    this.article.image = image_data;


  }
  getArticle() {

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
}
