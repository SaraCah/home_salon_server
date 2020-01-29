const chai = require("chai");
// chai.use(require('chai-json-schema'));
const assert = require("chai").assert;
const chaiHttp = ("chai-http");
const app = require("../server")

describe("AdminModel", function(){
    it("adminModel should have a user", function(){
        assert.equal(adminModel(), "user");
    });
});
