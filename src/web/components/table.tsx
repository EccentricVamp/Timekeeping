/** @jsx h */
import { tw } from "twind";
import { ComponentChildren, h } from "preact";

export function Table(children: ComponentChildren) {
  return (
    <table class={tw("border-collapse table-auto w-full my-3")}>
      {children}
    </table>
  );
}

export function TableBody(children: ComponentChildren) {
  return <tbody class={tw("bg-slate-200")}>{children}</tbody>;
}

export function TableHead(children: ComponentChildren) {
  return <thead>{children}</thead>;
}

export function TableRow(children: ComponentChildren) {
  return <tr class={tw("border-b border-slate-300 p-3")}>{children}</tr>;
}
