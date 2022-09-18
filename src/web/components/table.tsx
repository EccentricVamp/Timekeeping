import { tw } from "twind";
import { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
};

export function Table({ children }: Props) {
  return (
    <table class={tw("border-collapse table-auto w-full my-3")}>
      {children}
    </table>
  );
}

export function TableBody({ children }: Props) {
  return <tbody class={tw("bg-slate-200")}>{children}</tbody>;
}

export function TableHead({ children }: Props) {
  return <thead>{children}</thead>;
}

export function TableRow({ children }: Props) {
  return <tr class={tw("border-b border-slate-300 p-3")}>{children}</tr>;
}
