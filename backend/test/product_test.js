import chai from "chai"
import chaiHttp from "chai-http"
const expect = chai.expect

chai.use(chaiHttp);
const baseURL = "https://a-2-shihhu0a0-zheng-duan.herokuapp.com/api/v1/products"
describe("/GET products tests", function(){
    it('get all products', function(done) {
            chai.request(baseURL)
            .get('/')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('total_results').eql(9);
                done();
            }).timeout(10000);
        })
    })