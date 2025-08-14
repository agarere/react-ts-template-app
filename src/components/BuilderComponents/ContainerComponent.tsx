import { JSX } from "react";
import { BaseComponent } from "./BaseComponent";

export class Container extends BaseComponent<Container> {

  public static builder(): Container {
    return new Container();
  }

  public build(): JSX.Element {
    return (
      <div className={`container mt-4 ${this._className || ""}`}>
        {this._children}
      </div>
    );
  }
}