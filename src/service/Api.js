const BASE_URL = "http://jsonplaceholder.typicode.com/posts";
export async function fetchUser() {
  const res = await fetch(`${BASE_URL}`);
  return res.ok ? await res.json() : Promise.reject(new Error("Error"));
}
export async function fetchUserById(value) {
  const res = await fetch(`${BASE_URL}/${value}`);
  return res.ok ? await res.json() : Promise.reject(new Error("Error"));
}
