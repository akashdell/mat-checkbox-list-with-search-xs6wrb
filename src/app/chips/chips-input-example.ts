import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Fruit {
  name: string;
}

/**
 * @title Chips with input
 */
@Component({
  selector: 'chips-input-example',
  templateUrl: 'chips-input-example.html',
  styleUrls: ['chips-input-example.css'],
})
export class ChipsInputExample {
  @Input() inputProperty: any[];
  @Output() outputEvent = new EventEmitter<string>();
  onClick(item: any): any {
    this.outputEvent.emit(item);
  }

  get inputValue(): any[] {
    console.log('this.inputProperty>>>', this.inputProperty);
    return this.inputProperty;
  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[];
  selectedItem: string;

  ngOnInit(): void {
    // Initialization logic here
    this.fruits = this.inputProperty;
    console.log('dataItems>>>', this.fruits);
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
    let obj = { fruidId: fruit.id };
    this.onClick(fruit.id);
  }
  selectItem(item: string) {
    this.selectedItem = item;
    console.log('selectedItems>>>', this.selectedItem);
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
