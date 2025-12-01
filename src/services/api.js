export async function fetchTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20');
    return res.json();
  }
  