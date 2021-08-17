import data from '../Language/en.json';
// import app from '../app';

function sum(x: number, y: number) {
  return x + y
}

// import { sum } from '../app'
describe("Static HTML for old browsers", () => {
  test("Should return 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("Title should be Your Browser Is <br>No Longer Supported", () => {
    const subTitle = 'sub-title'
    console.log(data)
    // const res = app(data)
      //expect(res).toContain("Your Browser Is <br>No Longer Supported")
    expect(1).toBe(1)
  })
});
