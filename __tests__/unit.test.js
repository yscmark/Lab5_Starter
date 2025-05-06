// unit.test.js

import {
    isPhoneNumber,
    isEmail,
    isStrongPassword,
    isDate,
    isHexColor,
} from "../code-to-unit-test/unit-test-me";

// TODO - Part 2
test("123-456-7890 is a phone number", () => {
    // TODO
    expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test("000-0000-0000 is a phone number", () => {
    // TODO
    expect(isPhoneNumber("000-0000-0000")).toBe(true);
});

test("123-456-789 is not a phone number", () => {
    // TODO
    expect(isPhoneNumber("123-456-789")).toBe(false);
});

test("abc-def-ghij is not a phone number", () => {
    // TODO
    expect(isPhoneNumber("abc-def-ghij")).toBe(false);
});

test("abc@gmail.com is an email", () => {
    // TODO
    expect(isEmail("abc@gmail.com")).toBe(true);
});

test("johndoe@us.gov is an email", () => {
    // TODO
    expect(isEmail("johndoe@us.gov")).toBe(true);
});

test("abc@@gmail.com is not an email", () => {
    // TODO
    expect(isEmail("abc@@gmail.com")).toBe(false);
});

test("john.doe@us.gov is not an email", () => {
    // TODO
    expect(isEmail("john.doe@us.gov")).toBe(false);
});

test("John is a strong password", () => {
    // TODO
    expect(isStrongPassword("John")).toBe(true);
});

test("John_Doe is a strong password", () => {
    // TODO
    expect(isStrongPassword("John_Doe")).toBe(true);
});

test("JohnJohnJohnJohn is not a strong password", () => {
    // TODO
    expect(isStrongPassword("JohnJohnJohnJohn")).toBe(false);
});

test("_John is not a strong password", () => {
    // TODO
    expect(isStrongPassword("_John")).toBe(false);
});

test("2/27/2004 is a date", () => {
    // TODO
    expect(isDate("2/27/2004")).toBe(true);
});

test("02/2/2004 is a date", () => {
    // TODO
    expect(isDate("02/2/2004")).toBe(true);
});

test("2/27/04 is not a date", () => {
    // TODO
    expect(isDate("2/27/04")).toBe(false);
});

test("002/27/2004 is not a date", () => {
    // TODO
    expect(isDate("002/27/04")).toBe(false);
});

test("#FFFFFF is a hex code", () => {
    // TODO
    expect(isHexColor("#FFFFFF")).toBe(true);
});

test("#000 is a hex code", () => {
    // TODO
    expect(isHexColor("#000")).toBe(true);
});

test("#FFFFF is not a hex code", () => {
    // TODO
    expect(isHexColor("#FFFFF")).toBe(false);
});

test("#F-FFFF is not a hex code", () => {
    // TODO
    expect(isHexColor("#F-FFFF")).toBe(false);
});
