import sum from "../sum"

test("sum should return sum of two numbers", () => {
    const result = sum(1, 3);
    expect(result).toBe(4);
})