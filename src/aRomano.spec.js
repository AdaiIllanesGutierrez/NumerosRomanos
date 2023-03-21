import aRomano from "./aRomano.js";

describe("Prueba", () => {
  it("se ingresa 1 Deberia devolver I", () => {
    expect(aRomano(1)).toEqual('I');
  });
  it("se ingresa 2 Deberia devolver II", () => {
    expect(aRomano(2)).toEqual('II');
  });
});