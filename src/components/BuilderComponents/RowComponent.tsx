import { JSX } from "react";
import { BaseComponent } from "./BaseComponent";

export class Row extends BaseComponent<Row> {
  public static builder(): Row {
    return new Row();
  }

  public col(child: JSX.Element): Row {
    this.child(child);
    return this;
  }

  public build(): JSX.Element {
    return (
      <div className={`row ${this._className || ""}`}>
        {this._children}
      </div>
    );
  }
}
