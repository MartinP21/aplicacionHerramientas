// noticia.page.ts
import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  posts: any[] = [];
  showFullContent: boolean = false; // Variable para controlar si se muestra el contenido completo

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  toggleContent() {
    this.showFullContent = !this.showFullContent; // Cambia el estado de la variable al hacer clic en "Open more"
  }
}


