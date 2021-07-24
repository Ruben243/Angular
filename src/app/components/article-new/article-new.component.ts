import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import  Swal from 'sweetalert2';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {
  public article!: Article
  public status!: string;
  public page_title: string;
  public url: string;
  public is_Edit: boolean;

  //comfiguracion del file uploader
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
    this.page_title = "Crear Articulo";
    this.url = Global.url;
    this.is_Edit = false;

  }

  ngOnInit() {
  }

  onSubmit() {
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'sucess') {
          this.status = 'sucess';
          this.article = response.article;
          //alerta
          Swal.fire(  'Articulo creado',  'El articulo se ha añadido correctamente',  'success')
          this._router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }

      },
      error => {
        console.error(error);
        this.status = 'error'

      })
  }



  imageUpload(data: any) {
    let image_data = data.body.image
    this.article.image = image_data;


  }
}
