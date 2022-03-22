import {Controllers} from "../../../../../templates/home/header/scripts";


test("Home -> Header -> script", () => {
    const {sum} = Controllers()
    expect(sum(3,2)).toBe(5)
})