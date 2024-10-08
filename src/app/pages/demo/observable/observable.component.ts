import { Component, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent implements OnInit {

  name$: Observable<any> = of(false);
  name2$: Subject<any> = new Subject<any>();
  name3$: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  ngOnInit(): void {
    // this.name$.subscribe((res) => {
    //   alert(res);
    // })

    this.name2$.subscribe((res) => {
      console.log('name2:', res);
    })

    this.name3$.subscribe((res) => {
      console.log('name3:', res);
    })
  }

  test() {
    this.name2$.next(true)
    this.name3$.next(true)
  }

}
