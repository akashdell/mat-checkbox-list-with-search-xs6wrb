import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchInput: FormControl = new FormControl();
  @Input() placeholder = 'Search';
  @Output() search = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.searchInput.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((text) => {
        this.search.emit(text);
      });
  }
}
