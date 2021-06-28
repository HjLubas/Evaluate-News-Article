import { is_url } from "../src/client/js/urlChecker";

test('should be falsy', () => {
    expect(is_url("udacity.com")).toBeFalsy();
});

test('should be truthy', () => {
    expect(is_url("https://www.udacity.com/")).toBeTruthy();
});