import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

return items.filter( it => {
  console.log("inside filter "+ JSON.stringify(it));
      return JSON.stringify(it).includes(searchText);
    });
   }
}