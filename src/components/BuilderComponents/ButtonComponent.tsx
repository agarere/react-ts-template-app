import { JSX } from "react";
import { BaseComponent } from "./BaseComponent";

export enum ButtonType {
  Primary = "btn-primary",
  Secondary = "btn-secondary",
}

export class Button extends BaseComponent<Button> {
  private _type: ButtonType = ButtonType.Primary;
  private _label: string = "Click Me";
  private _onClick?: () => void;

  onClick(onClick: () => void): Button {
    this._onClick = onClick;
    return this;
  }

  public type(type: ButtonType): Button {
    this._type = type;
    return this;
  }

  public label(label: string): Button {
    this._label = label;
    return this;
  }

  public static builder(): Button {
    return new Button();
  }

  public build(): JSX.Element {
    return (
      <button
        type="button"
        className={`btn ${this._type} ${this._className || ""}`}
        onClick={this._onClick}
      >
        {this._label}
        {this._children}
      </button>
    );
  }
}