/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

type Props = {
  value: string;
};

export function PageHeading({ value }: Props) {
  return <h3 class={tw("text-xl font-medium")}>{value}</h3>;
}
