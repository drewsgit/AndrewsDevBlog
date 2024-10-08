import { Component, inject, OnDestroy } from '@angular/core';
import { DbService } from '../../../data/db.service';
import { combineLatest, filter, map, of, Subject, switchMap, takeUntil, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnDestroy {
  dbService = inject(DbService);
  destroy$: Subject<boolean> = new Subject<boolean>();

  test() {
    const source$ = of([{ name: 'andrew', age: 1 }, { name: 'andrew2', age: 2 }, { name: 'andrew3', age: 3 }]);
    source$
      .pipe(
        map((res: any) =>
          res.map((res2: any) => {
            res2.age = 5;
            return res2;
          }))
      ).
      subscribe((res) => {
        console.log('map1:', res);
      })

    const source2$ = of(1, 2, 3);
    source2$
      .pipe(
        map((res: any) => { return res * 2 })
      ).
      subscribe((res) => {
        console.log('map1.1:', res);
      })

    const source3$ = of({ name: 'andrew', age: 1 }, { name: 'andrew2', age: 2 });
    source3$
      .pipe(
        map((res: any) => {
          res.name = 'foo'
          return res
        })
      ).
      subscribe((res) => {
        console.log('map1.2:', res);
      })

    const source4$ = of({ name: 'andrew', age: 1 }, { name: 'andrew2', age: 2 });
    source4$
      .pipe(
        filter((res: any) => res.name === 'andrew')
      ).
      subscribe((res) => {
        console.log('filter1:', res);
      })


    // this.dbService.getPosts().subscribe((res) => {
    //   console.log('subscribe:', res);
    // })

    this.dbService.getPosts()
      .pipe(
        tap((res) => {
          console.log('tap:', res);
        })
      ).
      subscribe()

    this.dbService.getPosts()
      .pipe(
        takeUntil(this.destroy$),
        map((res: any) =>
          res.map((res2: any) => {
            res2.title = 'andrew';
            return res2
          }
          )),
        tap((res) => {
          console.log('map2:', res);
        })
      ).
      subscribe()

    combineLatest([this.dbService.getPosts(), this.dbService.getPostByID(3)]).subscribe((res) => {
      console.log('combinelatest:', res);
    })

    const source5$ = of(1);
    source5$.pipe(
      switchMap((res) => this.dbService.getPostByID(res))
    ).subscribe((res) => {
      console.log('switchmap:', res);
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
