import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'paginator',
  standalone: true,
  imports: [NgFor],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent implements OnInit {
  @Input() totalItems: number = 10;
  @Input() itemsPerPage: number = 5;
  @Output() pageChanged = new EventEmitter<number>();
  
  totalPages: number = 1;
  currentPage: number = 1;

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage)    
  }

  get pageNumbers(): Array<number|string>{
    let pages = [];
    const pagesShow = 3;
    
    if(this.totalPages <= 1) return [1];

    let startPage = Math.max(2,this.currentPage - pagesShow);
    let endPage = Math.min(this.totalPages - 1, this.currentPage + pagesShow);
    
    if(this.totalPages <= (pagesShow * 2) + 3){
      startPage = 2;
      endPage = this.totalPages - 1;
    }

    pages.push(1)
    if(startPage > 2){
      pages.push('...');
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
    
    if(endPage < this.totalPages - 1){
      pages.push('...')
    }

    if(this.totalPages > 1 ){
      pages.push(this.totalPages);
    }

    return pages
  }

  navigatePage(page: number | string): void {
    if(page === '...' || page === this.currentPage) return;
    this.currentPage = +page;
    this.pageChanged.emit(this.currentPage)
  }
}
