var main = require('./main');

describe('src/js/', function () {
    describe('main', function () {
        beforeEach(function () {
            this.sandbox = sinon.sandbox.create();
        });

        afterEach(function () {
            this.sandbox.restore();
        });

        it('should always return true', function () {
            expect(main()).to.be.true;
        });

        it('should call the provided function with `false`', function () {
            var testFn = this.sandbox.spy();
            main(testFn);
            expect(testFn).to.have.been.calledWith(false);
        });
    });
});
