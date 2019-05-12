import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {filter, toArray} from 'rxjs/internal/operators';
import {BehaviorSubject, Observable, of} from "rxjs/index";
import {environment} from '../environments/environment'

class Person {
  name: String;
  age: Number;

  constructor(name: String, age: Number) {
    this.name = name;
    this.age = age;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'todoapp';
  elems = [1, 2, 3];
  text = '';
  env = environment.apiUrl

  @ViewChild('footer') footerComponent: FooterComponent;

  constructor() {

    /*setInterval(() => {
      // this.elems.push(this.elems[this.elems.length - 1] + 1);
      this.elems = this.elems.concat(this.elems[this.elems.length - 1] + 1);
    }, 3000);

    const o = Observable.create((subscriber: Subscriber) => {
      console.log('observable')
      subscriber.next(2);
      subscriber.complete();
    });

    const p = new Promise((res) => {
      console.log('promise')
      res(2);
    });

    o.subscribe((v) => {
      console.log(v)
    })

    o.subscribe((v) => {
      console.log(v + '2')
    })*/


    /*const seq = of(
      { name: 'Foo', age: 17 },
      { name: 'Bar', age: 18 },
      { name: 'Baz', age: 19 },
      { name: 'Bat', age: 20 },
      { name: 'Bal', age: 14 }
      );

    seq.pipe(
      filter((e) => e.age >= 18),
      //map((e) => e.name),
      reduce((acc, curr) => acc + curr.age, 0)
    ).subscribe((res) => {
      console.log(res)
    })*/

    /*const people = [
      new Person('Foo', 17),
      new Person('Bar', 18),
      new Person('BaZ', 19),
      new Person('Bat', 20),
      new Person('Bal', 14),
    ];
    this.getMajorPeople(people).subscribe((majorPeople: Array<Person>) => {
      console.log(majorPeople)
    })*/

    const s = new BehaviorSubject<String>(null);

    s.next('foo')

    s.subscribe((res) => {
      console.log(res)
    })

    s.next('barrr')


  }

  private getMajorPeople(people: Array<Person>): Observable<Array<Person>> {
    return of(...people).pipe(
      filter((e) => e.age >= 18),
      toArray()
    );
  }

  ngAfterViewInit(): void {
    console.log(this.footerComponent, 'foo');
  }

}
