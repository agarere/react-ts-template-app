import { JSX } from "react";

export abstract class BaseComponent<T extends BaseComponent<T>> {
  protected _name?: string;
  protected _className?: string;
  protected _children: JSX.Element[] = [];

  public name(name: string): T {
    this._name = name;
    return this as unknown as T;
  }

  public className(className: string): T {
    this._className = className;
    return this as unknown as T;
  }

  public children(...children: JSX.Element[]): T {
    this._children.push(...children);
    return this as unknown as T;
  }

  public content(...child: JSX.Element[]): T {
    if (child.length === 1) {
      this.child(child[0]);
    } else {
      this.children(...child);
    }
    return this as unknown as T;
  }
  
  public child(child: JSX.Element): T {
      this._children.push(child);
      return this as unknown as T;
    }
  
  public abstract build(): JSX.Element;
}