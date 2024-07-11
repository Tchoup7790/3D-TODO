interface FilterButtonProps {}

export default function FilterButton({}: FilterButtonProps) {
  return (
    <button type="button" aria-pressed="true">
      <span>Show</span>
      <span>all</span>
      <span>tasks</span>
    </button>
  );
}
