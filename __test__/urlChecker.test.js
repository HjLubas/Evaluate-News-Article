import { is_url } from "../src/client/js/urlChecker";

//inputting incomplete or non url text
test('should be falsy', () => {
    expect(is_url("udacity.com")).toBeFalsy();
});

//inputting a complete url address
test('should be truthy', () => {
    expect(is_url("https://www.udacity.com/")).toBeTruthy();
});