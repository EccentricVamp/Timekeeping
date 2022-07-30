import { IS_BROWSER } from "fresh/runtime.ts";
import { setup, tw } from "twind";

if (IS_BROWSER) setup();

export enum Context {
  Primary = "bg-sky-400 text-white",
}

export function button(context: Context) {
  return tw(`${context} p-2 rounded`)
}

export function container() {
  return tw("p-4 mx-auto max-w-screen-md");
}

export function heading() {
  return tw("text-xl font-medium");
}

export function link() {
  return tw("text-sky-500");
}

export function table() {
  return tw("border-collapse table-auto w-full my-3")
}

export function tableBody() {
  return tw("bg-slate-200")
}

export function tableData() {
  return tw("border-b border-slate-300 p-3")
}