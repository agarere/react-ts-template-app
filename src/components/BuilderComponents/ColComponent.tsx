import { JSX } from "react";
import { BaseComponent } from "./BaseComponent";

export class Col extends BaseComponent<Col> {
  private size: number = 12;

  public span(size: number): Col {
    this.size = size;
    return this;
  }

  public static builder(): Col {
    return new Col();
  }

  public build(): JSX.Element {
    return (
      <div className={`col-${this.size} ${this._className || ""}`}>
        {this._children}
      </div>
    );
  }
}
