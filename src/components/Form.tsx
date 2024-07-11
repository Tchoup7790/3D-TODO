import { useState } from "react";

interface FormProps {
  addTask: (name: string) => void;
}

export default function Form({ addTask }: FormProps) {
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name.trim()) {
      addTask(name);
      setName("");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        <label htmlFor="new-todo-input">What needs to be done ?</label>
      </h2>
      <input type="text" id="new-todo-input" name="text" autoComplete="off" value={name} onChange={handleChange} />
      <button type="submit">add</button>
    </form>
  );
}
