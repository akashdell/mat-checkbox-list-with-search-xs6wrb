import { Component, ViewChild } from '@angular/core';

/**
 * @title List with selection
 */
@Component({
  selector: 'list-selection-example',
  styleUrls: ['list-selection-example.css'],
  templateUrl: 'list-selection-example.html',
})
export class ListSelectionExample {
  selected: any;
  selectedList: any = [];
  @ViewChild('shoes') shoes: any = [];

  data = [
    {
      id: '1',
      name: 'Abdomen Trauma',
      sortorder: '0',
      code: 'ABDOMEN',
    },
    {
      id: '2',
      name: 'Back Pain',
      sortorder: '3',
      code: 'BACK',
    },
    {
      id: '3',
      name: 'Bites/Animal/Human',
      sortorder: '4',
      code: 'BITE',
    },
    {
      id: '4',
      name: 'Bone',
      sortorder: '7',
      code: 'BONE',
    },
    {
      id: '5',
      name: 'Burns',
      sortorder: '8',
      code: 'BURN',
    },
    {
      id: '6',
      name: 'Chest Trauma',
      sortorder: '9',
      code: 'CHEST',
    },
    {
      id: '7',
      name: 'Ear',
      sortorder: '12',
      code: 'EAR',
    },
    {
      id: '8',
      name: 'Eye',
      sortorder: '13',
      code: 'EYE',
    },
    {
      id: '9',
      name: 'Abdominal Groin Strain',
      sortorder: '1',
      code: 'GROIN',
    },
    {
      id: '10',
      name: 'Head Injury',
      sortorder: '14',
      code: 'HEAD',
    },
    {
      id: '11',
      name: 'Joint Pain/Swelling',
      sortorder: '17',
      code: 'JOINT',
    },
    {
      id: '12',
      name: 'Mouth & Teeth',
      sortorder: '18',
      code: 'MOUTH',
    },
    {
      id: '13',
      name: 'Neck Pain',
      sortorder: '19',
      code: 'NECK',
    },
    {
      id: '14',
      name: 'Rash',
      sortorder: '20',
      code: 'RASH',
    },
    {
      id: '15',
      name: 'Shock',
      sortorder: '21',
      code: 'SHOCK',
    },
    {
      id: '16',
      name: 'Skin',
      sortorder: '22',
      code: 'SKIN',
    },
    {
      id: '17',
      name: 'Bites/Stings',
      sortorder: '5',
      code: 'STING',
    },
    {
      id: '18',
      name: 'Soft Tissue',
      sortorder: '23',
      code: 'TISSUE',
    },
    {
      id: '19',
      name: 'Allergic Reaction',
      sortorder: '2',
      code: 'ALLERGIC',
    },
    {
      id: '20',
      name: 'Blood/Body Fluid Exposure',
      sortorder: '6',
      code: 'BLOODBODY',
    },
    {
      id: '21',
      name: 'Heat Exposure',
      sortorder: '15',
      code: 'HEATEXPOSURE',
    },
    {
      id: '22',
      name: 'Inhalation Injury',
      sortorder: '16',
      code: 'INHALATION',
    },
    {
      id: '23',
      name: 'COVID-19',
      sortorder: '10',
      code: 'COVID',
    },
    {
      id: '24',
      name: 'Depression',
      sortorder: '11',
      code: 'DEPRESSION',
    },
    {
      id: '25',
      name: 'Emotional Health',
      sortorder: '24',
      code: 'STRESS',
    },
    {
      id: '26',
      name: 'Emotional Health: Harm to Self or Others',
      sortorder: '25',
      code: 'HARM',
    },
  ];
  typesOfShoes: any[] = this.data;
  shoesSet = new Map();
  filteredOptions: any[] = [];
  selectedOptions: any[] = [];
  parentValue: string = 'akash';

  constructor() {
    this.typesOfShoes = this.typesOfShoes.map((item) => {
      item.selectedStatus = false;
      return item;
    });

    this.filteredOptions = [...this.typesOfShoes];
  }

  parentMethod(value: number): void {
    console.log('this value coming from child', value);
    const options = this.shoes.options.toArray();
    let temp = value - 1;
    options[temp].selected = false;
    this.changeSelectionItems(value);
    // debugger;
  }

  onSearch(searchTerm: string) {
    console.log('search Term', searchTerm);
    this.filteredOptions = this.typesOfShoes.filter((item) => {
      if (item['name'].toLowerCase().includes(searchTerm)) {
        return item;
      }
    });
    console.log('filtered Options>>>>', this.filteredOptions);
  }

  selectionChange($event: any) {
    console.log('event>>>', $event.option.value);
    let itemId = $event.option.value;
    this.changeSelectionItems(itemId);
  }

  changeSelectionItems(itemId: number) {
    console.log('shoeSet Final>>>', this.shoesSet.get(itemId));
    console.log('itemId>>>>', itemId);
    let tempArray: any[] = this.typesOfShoes.filter((item) => {
      if (item.id === itemId) return item;
    });
    tempArray[0].selectedStatus = !tempArray[0].selectedStatus;

    if (tempArray[0].selectedStatus) this.selectedOptions.push(tempArray[0]);
    else {
      this.selectedOptions = this.selectedOptions.filter(
        (obj) => obj.id !== tempArray[0].id
      );
    }

    console.log('this.selectedOptions>>>>', this.selectedOptions);
  }

  onChange(event: any) {
    // if(condition === false){
    //     event.option.selected = false;
    // }

    console.log('onChange event>>>>>>', event);
    const options = this.shoes.options.toArray();
    console.log('this.shoes>>>>', options);
  }

  addNewItem() {
    this.filteredOptions.push('item1');
    this.shoesSet.set('item1', true);
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
