export async function getProducts() {
  const response = await fetch('http://localhost:3000/products');
  const json = await response.json();
  return json;
}