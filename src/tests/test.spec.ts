import data from '../Language/en.json';
import { app } from '../app';

function sum(x: number, y: number) {
  return x + y
}

// import { sum } from '../app'
describe("Static HTML for old browsers", () => {
  test("Should return 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("Title should be Your Browser Is No Longer Supported", async () => {
    const res = await app(data)
    expect(res).toContain("Your Browser Is No Longer Supported")
  })
});

describe("Testing dynamic text in ejs from json", () => {
    test("Test title in ejs", async () => {
        const res = await app(data)
        expect(res).toContain("Your Browser Is No Longer Supported")
    })
    test("Test subTitle in ejs", async () => {
        const res = await app(data)
        expect(res).toContain("To view this website and enjoy a better online experience, update your browser for free.")
    })
    test("Test googleText in ejs", async () => {
        const res = await app(data)
        expect(res).toContain("Google Chrome")
    })
    test("Test safariText in ejs", async () => {
        const res = await app(data)
        expect(res).toContain("Safari (Mac)")
    })
    test("Test edgeText in ejs", async () => {
        const res = await app(data)
        expect(res).toContain("Edge")
    })
    test("Test firefoxText in ejs", async () => {
        const res = await app(data)
        expect(res).toContain("Firefox")
    })
})
