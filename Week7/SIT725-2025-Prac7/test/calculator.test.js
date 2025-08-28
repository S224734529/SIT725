const expect = require("chai").expect;
const request = require("request");
describe("Sum Calculator API", function () {
  const baseUrl = "http://localhost:3000";
  it("returns status 200 to check if api works", function (done) {
    request(baseUrl, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it("should return correct sum for valid numbers", function (done) {
    request.get(`${baseUrl}/add?a=10&b=5`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("15"); // Response contains the sum in plain text or HTML
      done();
    });
  });
  it("should handle missing parameters", function (done) {
    request.get(`${baseUrl}/add?a=10`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200); // Expect error
      done();
    });
  });
  it("should return error for non-numeric input", function (done) {
    request.get(
      `${baseUrl}/add?a=hello&b=world`,
      function (error, response, body) {
        expect(response.statusCode).to.not.equal(200);
        done();
      }
    );
  });
});

describe("Multiply Calculator API", function () {
  const baseUrl = "http://localhost:3000";

  it("should return correct product for valid numbers", function (done) {
    request.get(`${baseUrl}/multiply?c=3&d=4`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("12"); // 3 * 4 = 12
      done();
    });
  });

  it("should handle missing parameters", function (done) {
    request.get(`${baseUrl}/multiply?c=3`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200); // expect 400 or similar
      done();
    });
  });

  it("should return error for non-numeric input", function (done) {
    request.get(`${baseUrl}/multiply?c=foo&d=bar`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
  });

  it("should multiply with zero", function (done) {
    request.get(`${baseUrl}/multiply?c=0&d=99`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("0"); // 0 * 99 = 0
      done();
    });
  });

  it("should handle negative numbers", function (done) {
    request.get(`${baseUrl}/multiply?c=-2&d=5`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("-10"); // -2 * 5 = -10
      done();
    });
  });

  it("should handle decimal numbers", function (done) {
    request.get(`${baseUrl}/multiply?c=2.5&d=4`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("10"); // 2.5 * 4 = 10
      done();
    });
  });
});
