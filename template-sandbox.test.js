'use strict';

/*

*/

for (const solution of []) {
  describe(solution.name + ': _', () => {
    describe('_', () => {
      it('_', () => {
        expect(solution(_)).toEqual(_);
      });
    });
  });
}






//////
/*
Two functions 
first function is copied from codewards 
second function with a slight mod casting the string param
*/
​
function repeatStr(n, s) {
  var str = "";
  for (var i = 0; i < n; i++) str += s;
  return str;
}
​
function repeatStr2(n, s) {
  var str = "";
  let sToString = String(s);
  for (var i = 0; i < n; i++) str += sToString;
  return str;
}
​
for (const solution of [
  repeatStr,
  //repeatStr2
]) {
  describe(solution.name + ": test repeat strings", () => {
    describe("basic tests", () => {
      it("passing a symbol", () => {
        expect(solution(3, "*")).toEqual("***");
      });
      it("passing another symbol", () => {
        expect(solution(5, "#")).toEqual("#####");
      });
      it("passing two letters word", () => {
        expect(solution(2, "ha")).toEqual("haha");
      });
    });
    describe("passing phrases", () => {
      it("passing 3 words phrase", () => {
        expect(solution(5, "wish the best! ")).toEqual(
          "wish the best! wish the best! wish the best! wish the best! wish the best! "
        );
      });
      it("passing two words phrase", () => {
        expect(solution(2, "Good bye ")).toEqual("Good bye Good bye ");
      });
      it("passing numbers as string", () => {
        expect(solution(2, "123")).toEqual("123123");
      });
    });
    describe("passing primitive types", () => {
      it("passing boolean true", () => {
        expect(solution(5, true)).toEqual("truetruetruetruetrue");
      });
      it("passing number", () => {
        expect(solution(3, 5)).toEqual("555");
      });
    });
  });
}