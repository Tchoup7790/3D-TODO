interface TodoProps {
  id: string;
  name: string;
  completed: boolean;
  key: string;
}

export default function Todo({ id, name, completed, key }: TodoProps) {
  return (
    <li>
      <div>
        <input type="checkbox" id={id} defaultChecked={completed} />
        <label htmlFor={id}>{name}</label>
      </div>
      <div>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </div>
    </li>
  );
}
