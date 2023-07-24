import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: String, city:string): any{
    const result:any =[];
    if(!value || filterString=='' || city ===''){
    
    return null;
  }
  value.forEach((a:any)=>{
    if(a[city].trim().toLowerCase().includes(filterString.toLowerCase())){
      result.push(a);
    }
  });
  return result;

}
}
