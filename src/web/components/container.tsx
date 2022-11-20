import { ComponentChildren } from "preact";

type Props = {
  isFluid?: boolean;
  children: ComponentChildren;
};

export function Container({ isFluid = false, children }: Props) {
  return <main class="p-4 mx-auto max-w-screen-md">{children}</main>;
}
