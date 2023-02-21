import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleState } from './states/article.states';
import * as ArticleActions from './actions/article.actions'
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login_test';
  article$: Observable<ArticleState>;
  constructor(private store : Store<{article : ArticleState}>){
this.article$ = this.store.select('article');

  }
  loadarticle(){
    this.store.dispatch(ArticleActions.getPerginnate({page:1,itemPerPage:5}))
  }
}
