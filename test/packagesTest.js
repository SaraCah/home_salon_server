const chai = require("chai");
// chai.use(require('chai-json-schema'));
// const assert = require("chai").assert;
const jwt = require("jsonwebtoken");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;
const {PackageModel} = require('../models/packages')


chai.use(chaiHttp);

describe("Packages Routes", () => {
    it("Number of Packages recieved matches packages in database", done => {
        chai
        .request(app)
        .get("/api/package")
        .end(function(err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            // Get packages from db and expect the length to be the same as the packages returned in res
            expect(res.body.length).to.be.equal(1)
            done()
        });
    });
    it("Update a package", done => {
        chai
        .request(app)
        .get("/api/package")
        .end(function(err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done()
        });
    });
});
