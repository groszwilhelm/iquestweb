import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";

import { MeatComponent } from "./meat/meat.component";
import { CheeseComponent } from "./cheese/cheese.component";
import { LettuceComponent } from "./lettuce/lettuce.component";
import { KetchupComponent } from "./ketchup/ketchup.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ultimate-cheeseburger";
  componentRef: any;

  @ViewChild("burgercontainer", { read: ViewContainerRef })
  entry: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent(componentType) {
    const factory = this.resolver.resolveComponentFactory(componentType);
    this.componentRef = this.entry.createComponent(factory);
  }

  createMeatComponent() {
    const factory = this.resolver.resolveComponentFactory(MeatComponent);
    this.componentRef = this.entry.createComponent(factory);
  }

  createCheeseComponent() {
    const factory = this.resolver.resolveComponentFactory(CheeseComponent);
    this.componentRef = this.entry.createComponent(factory);
  }

  createLettuceComponent() {
    const factory = this.resolver.resolveComponentFactory(LettuceComponent);
    this.componentRef = this.entry.createComponent(factory);
  }

  createSauceComponent() {
    const factory = this.resolver.resolveComponentFactory(KetchupComponent);
    this.componentRef = this.entry.createComponent(factory);
  }
}
