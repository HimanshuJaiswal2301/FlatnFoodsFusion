import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const now = new Date();
    const date = new Date(value);
    const elapsed = now.getTime() - date.getTime();

    // Define time units in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;

    if (elapsed < minute) {
      return Math.round(elapsed / 1000) + ' seconds ago';
    } else if (elapsed < hour) {
      return Math.round(elapsed / minute) + ' minutes ago';
    } else if (elapsed < day) {
      return Math.round(elapsed / hour) + ' hours ago';
    } else if (elapsed < week) {
      return Math.round(elapsed / day) + ' days ago';
    } else if (elapsed < month) {
      return Math.round(elapsed / week) + ' weeks ago';
    } else if (elapsed < year) {
      return Math.round(elapsed / month) + ' months ago';
    } else {
      return Math.round(elapsed / year) + ' years ago';
    }
  }
}
