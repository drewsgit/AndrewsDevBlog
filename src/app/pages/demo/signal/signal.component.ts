import { CommonModule } from "@angular/common";
import {
  Component,
  computed,
  effect,
  signal,
  untracked,
  WritableSignal,
} from "@angular/core";
import { DbService } from "../../../data/db.service";

@Component({
  selector: "app-signal",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./signal.component.html",
  styleUrl: "./signal.component.scss",
})
export class SignalComponent {
  totalPrice;

  signalItemList: WritableSignal<any>;
  signalIsLoading: WritableSignal<boolean>;

  fName: WritableSignal<string>;
  lName: WritableSignal<string>;
  fullName: any;

  signalTodos: WritableSignal<any>;

  fullName2: string;
  fName2 = "Tom";
  fName3 = "Darling";

  productsOrig = [
    { name: "rice", price: 10 },
    { name: "chicken", price: 20 },
    { name: "steak", price: 30 },
    { name: "potatoes", price: 5 },
    { name: "broccoli", price: 15 },
  ];

  items = [
    { name: "rice", price: 10 },
    { name: "chicken", price: 20 },
    { name: "steak", price: 30 },
    { name: "potatoes", price: 5 },
    { name: "broccoli", price: 15 },
  ];

  todos = [
    { id: 1, completed: false },
    { id: 2, completed: false },
    { id: 3, completed: true },
  ];

  constructor(private dbService: DbService) {
    // this.getTotal()

    this.signalItemList = signal(this.items);
    this.totalPrice = computed(() => {
      return this.signalItemList().reduce(
        (total, curr) => curr.price + total,
        0
      );
    });

    this.signalIsLoading = signal(false);
    this.signalIsLoading.set(true);

    // effect(() => {
    //   this.signalIsLoading() ? alert('loading') : alert('not loading');
    // })

    this.dbService.getPosts().subscribe((res) => {
      this.signalIsLoading.set(false);
    });

    this.fName = signal("andrew");
    this.lName = signal("wong");
    const temp = untracked(() => this.fName());
    this.fullName = computed(() => this.fName() + " " + this.lName());
    effect(() => {
      console.log("fName effect: ", this.fName());
      console.log("lName effect: ", this.lName());
      console.log("fullname effect: ", this.fullName());
    });
    this.fullName2 = this.fName2 + " " + this.fName3;

    this.signalTodos = signal(this.todos);
    console.log("todos: ", this.signalTodos());

    const todosLeft = computed(() => {
      return this.signalTodos().reduce(
        (todos, curr) => (curr.completed ? todos : todos + 1),
        0
      );
    });

    effect(() => {
      console.log("todos left: ", todosLeft());
      console.log("todos updated: ", this.signalTodos());
    });

    const j = [
      { value: "New", onclick: "CreateNewDoc()" },
      { value: "Open", onclick: "OpenDoc()" },
      { value: "Close", onclick: "CloseDoc()" },
    ];
  }

  private getTotal() {
    // this.totalPrice = this.items.reduce(
    //   (total, curr) => curr.price + total, 0
    // )
  }

  remove(item) {
    this.signalItemList.set(
      this.signalItemList().filter((x) => x.name !== item.name)
    );
    // this.getTotal();
  }

  reset() {
    this.signalItemList.set(this.productsOrig);
    // this.getTotal();
  }

  updateName() {
    this.fName.set("Carmen");
    // this.lName.set('Crinion');
    this.fName2 = "Bob";
  }

  updateTodos() {
    this.signalTodos.update((x) => {
      let temp = [...x];
      temp.forEach((x) => (x.completed = true));
      return temp;
    });
  }
}
