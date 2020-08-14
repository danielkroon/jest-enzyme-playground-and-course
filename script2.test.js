// https://github.com/sapegin/jest-cheat-sheet

const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls swapi to get people", () => {
  // can also add done as a parameter instead of using return
  expect.assertions(1);
  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
    // done();
  });
});

it("calls swapi to get people with a promise", () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
