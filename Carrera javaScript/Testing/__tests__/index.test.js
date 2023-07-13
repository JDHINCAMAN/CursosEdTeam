// Ejemlos con jest

test("HOlaa demo", () => {});
test("Verificar si 2+2=4", () => {
  expect(2 + 2).toBe(4);
});

test("Quiero verificar que 2 + 2 = 4 pero usado toEqual", () => {
  expect(2 + 2).toEqual(4);
});

test("Quiero verificar que 5 es mayor 4", () => {
  expect(5).toBeGreaterThan(4);
});

var holaMundo = "Hola mundo";
test("Que la palabra todos este dentro de mi variable holaMundo", () => {
  expect(holaMundo).not.toMatch(/todos/);
});

test("Que la palabra hola este dentro de mi variable holaMundo", () => {
  expect(holaMundo).toMatch(/Hola/);
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

const palindrome = (word) => word.split("").reverse().join("");
test("Verificar que hola es igual a aloh", () => {
  expect(palindrome("hola")).toBe("aloh");
});

const palindrome2 = (word) => {
  return new Promise((resolve, reject) => {
    if (!word) reject("La palabra esta vacia");
    const palabraInvertida = word.split("").reverse().join("");
    resolve(palabraInvertida);
  });
};

test("Quiero verificar que hola es igual a aloh", () => {
  return palindrome2("hola").then((str) => {
    expect(str).toBe("aloh");
  });
});

test("Quiero verificar que hola es igual a aloh", async () => {
  const response = await palindrome2("hola");
  expect(response).toBe("aloh");
});
