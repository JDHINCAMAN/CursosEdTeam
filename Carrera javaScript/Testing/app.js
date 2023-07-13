/**
 * Pruebas unitarias con Jest, Mocha y Jasmine = son Frameworks de testing, verifican partes de codigo
 * Pruebas de integración con NightWacht, verifican la integracion de modulos
 * Prueba E2E con Cypress y TestCafe,  pruebas punto a punto, simulacion de flujo de usuario hasta la finalizacion
 * TDD = desarrollo guiado por pruebas
 */

const assert = require("assert");

const isVowel = require("./isVowel.t");

console.assert(isVowel("e"), "No es una Vocal");

try {
  assert.ok(isVowel("e"));
} catch (error) {
  console.error(error.message);
}
