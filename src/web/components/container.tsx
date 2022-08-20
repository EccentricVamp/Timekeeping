/** @jsx h */
import { tw } from "twind";
import { ComponentChildren, h } from "preact";

type Props = {
  isFluid?: boolean;
  children: ComponentChildren;
};

export function Container({ isFluid = false, children }: Props) {
  return <main class={tw("p-4 mx-auto max-w-screen-md")}>{children}</main>;
}
