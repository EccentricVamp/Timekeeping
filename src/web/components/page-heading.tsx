type Props = {
  value: string;
};

export function PageHeading({ value }: Props) {
  return <h3 class="text-xl font-medium">{value}</h3>;
}
