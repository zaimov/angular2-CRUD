import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
     <nav *ngIf="items.length > pageSize">
         <ul class="pagination">
             <li [class.disabled]="currentPage == 1">
                 <a (click)="previous()" aria-label="Previous">
                 <span aria-hidden="true">&laquo;</span>
                 </a>
             </li>
             <li [class.active]="currentPage == page"
               *ngFor="let page of pages"
               (click)="changePage(page)">
                 <a>{{ page }}</a>
             </li>
             <li [class.disabled]="currentPage == pages.length">
                 <a (click)="next()" aria-label="Next">
                 <span aria-hidden="true">&raquo;</span>
                 </a>
             </li>
         </ul>
     </nav>
  `
})
export class PaginationComponent implements OnChanges {
  @Input() items = [];
  @Input('page-size') pageSize = 10;
  @Output('page-changed') pageChanged = new EventEmitter();
  public pages: any[];
  public currentPage;

  ngOnChanges() {
    this.currentPage = 1;
    var pagesCount = this.items.length / this.pageSize; 
    this.pages = [];
 		for (var i = 1; i <= pagesCount; i++) {
      this.pages.push(i);
    }
  }

  public changePage(page) {
    this.currentPage = page;
    this.pageChanged.emit(page);
  }

  public previous() {
    if (this.currentPage == 1) {
      return;
    }
    this.currentPage--;
    this.pageChanged.emit(this.currentPage);
  }

  next() {
    if (this.currentPage == this.pages.length) {
      return;
    }
    this.currentPage++;
    this.pageChanged.emit(this.currentPage);
  }
}
