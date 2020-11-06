import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{
  items = ['item1', 'item2', 'item3'];
  addItem(newItem: string){
    this.items.push(newItem);
  }


}
