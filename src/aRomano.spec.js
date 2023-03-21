import aRomano from "./aRomano.js";

describe("Prueba", () => {
  it("se ingresa 1 Deberia devolver I", () => {
    expect(aRomano(1)).toEqual('I');
  });
  it("se ingresa 2 Deberia devolver II", () => {
    expect(aRomano(2)).toEqual('II');
  });
  it("se ingresa 4 Deberia devolver IV", () => {
    expect(aRomano(4)).toEqual('IV');
  });
  it("se ingresa 5 Deberia devolver V", () => {
    expect(aRomano(5)).toEqual('V');
  });
  it("se ingresa 9 Deberia devolver IX", () => {
    expect(aRomano(9)).toEqual('IX');
  });
  it("se ingresa 10 Deberia devolver X", () => {
    expect(aRomano(10)).toEqual('X');
  });
});