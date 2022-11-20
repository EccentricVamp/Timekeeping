import { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
};

export function Table({ children }: Props) {
  return (
    <table class="border-collapse table-auto w-full my-3">
      {children}
    </table>
  );
}

export function TableBody({ children }: Props) {
  return <tbody class="bg-slate-200">{children}</tbody>;
}

export function TableHead({ children }: Props) {
  return <thead>{children}</thead>;
}

export function TableRow({ children }: Props) {
  return <tr class="border-b border-slate-300 p-3">{children}</tr>;
}
