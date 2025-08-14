import React, { ReactNode } from "react";

export abstract class BaseBuilder {
  protected children: ReactNode[] = [];

  add(child: ReactNode | BaseBuilder): this {
    if ("build" in (child as BaseBuilder)) {
      this.children.push((child as BaseBuilder).build());
    } else {
      this.children.push(child as ReactNode);
    }
    return this;
  }

  protected buildChildren(): ReactNode[] {
    return this.children;
  }

  abstract build(): ReactNode;
}
