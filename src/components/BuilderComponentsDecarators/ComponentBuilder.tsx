import React, { JSX } from "react";

type BuilderType<T> = {
  [K in keyof T]-?: (value: T[K]) => BuilderType<T>; // -? ile optional props dahil zincirleme
} & {
  build: () => JSX.Element;
};

export default class Builder {
  static generate = <T extends object>(Component: React.FC<T>) => {
    return {
      builder(): BuilderType<T> {
        const props: Partial<T> = {};

        const proxy: BuilderType<T> = new Proxy({}, {
          get(_target, prop: string) {
            if (prop === "build") {
              return () => <Component {...(props as T)} />;
            }

            // TS’ye bunu kesin fonksiyon olarak gösteriyoruz
            return (value: any) => {
              props[prop as keyof T] = value;
              return proxy;
            };
          }
        }) as unknown as BuilderType<T>; // <-- cast burada çok önemli

        return proxy;
      },
    };
  }
}