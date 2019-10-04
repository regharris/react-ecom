require("dotenv").config();

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
chai.should();

describe("test for endpoints", () => {
  it("should return all exterior products a 200 status code", done => {
    chai
      .request(app)
      .get("/api/productfilter/Performance")
      .end((error, response) => {
        response.should.have.status(200);
        console.log("hello");
        done();
      });
  });
  it("should return all products under 300 and a 200 status code", done => {
    chai
      .request(app)
      .get("/api/pricefilter/300")
      .end((error, response) => {
        response.should.have.status(200);
        done();
      });
  });
  it("should return all exterior products a 200 status code", done => {
    chai
      .request(app)
      .get("/api/productfilter/Exterior")
      .end((error, response) => {
        response.should.have.status(200);
        done();
      });
  });
  it("should return all products under 1000 and a 200 status code", done => {
    chai
      .request(app)
      .get("/api/pricefilter/1000")
      .end((error, response) => {
        response.should.have.status(200);
        done();
      });
  });
  it("test if all the response is a array", done => {
    chai
      .request(app)
      .get("/api/pricefilter/3000")
      .end((error, response) => {
        response.body.should.be.a("array");
        done();
      });
  });
});
