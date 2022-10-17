import chai from "chai"
import chaiHttp from "chai-http"
const expect = chai.expect

chai.use(chaiHttp);
const baseURL = "https://thriving-baklava-1e7330.netlify.app/"
describe("First Test", function(){
it('server is live', function(done) {
        chai.request(baseURL)
        .get('/')
        .end(function (err, res) {
            expect(res).to.have.status(200);
            done();
        });
    })
})