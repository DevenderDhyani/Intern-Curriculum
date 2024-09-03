
// const assert = require('assert');

// describe('Math Operations', () => {
//   before(function() {
//     console.log('Before all tests');
//   });

//   after(function() {
//     console.log('After all tests');
//   });

//   beforeEach(function() {
//     console.log('Before each test');
//   });

//   afterEach(function() {
//     console.log('After each test');
//   });

//   it('should add numbers correctly', function() {
//     assert.strictEqual(1 + 1, 2);
//   });

//   it('should subtract numbers correctly', function() {
//     assert.strictEqual(5 - 3, 2);
//   });

//   // it.skip('should multiply numbers correctly', function() {
//   //   assert.strictEqual(2 * 3, 6);
//   // });

//   it('should divide numbers correctly', function(done) {
//     setTimeout(function() {
//       assert.strictEqual(10 / 2, 5);
//       done();
//     }, 100);
//   });
//   it('should throw an error while deviding by 4',()=>{
//     assert.throws(()=>{
//         const x = 4/0;

//     },/Error/)
//   })
// });






















//we can describe describe with describe. 


// Test Suite: Math Operations
// describe('Math Operations', function() {

//   // Runs once before all tests in this suite
//   before(function() {
//     console.log('Setup: Before all tests');
//   });

//   // Runs once after all tests in this suite
//   after(function() {
//     console.log('Teardown: After all tests');
//   });

//   // Runs before each test case in this suite
//   beforeEach(function() {
//     console.log('Setup: Before each test case');
//   });

//   // Runs after each test case in this suite
//   afterEach(function() {
//     console.log('Teardown: After each test case');
//   });

//   // Test Suite for Addition
//   describe('#addition()', function() {
//     it('should return 4 when adding 2 + 2', function() {
//       assert.strictEqual(2 + 2, 4);
//     });

//     it.only('should return 0 when adding -2 + 2 (Focused Test)', function() {
//       assert.strictEqual(-2 + 2, 0);
//     });
//   });

//   // Test Suite for Subtraction
//   describe('#subtraction()', function() {
//     it('should return 0 when subtracting 2 - 2', function() {
//       assert.strictEqual(2 - 2, 0);
//     });

//     it.skip('should return -4 when subtracting -2 - 2 (Skipped Test)', function() {
//       assert.strictEqual(-2 - 2, -4);
//     });
//   });

//   // Test Suite for Multiplication
//   describe('#multiplication()', function() {
//     it('should return 9 when multiplying 3 * 3', function() {
//       assert.strictEqual(3 * 3, 9);
//     });

//     it('should return -6 when multiplying -2 * 3 with retries', function() {
//       this.retries(3); // Retry up to 3 times if test fails
//       assert.strictEqual(-2 * 3, -6);
//     });
//   });

//   // Test Suite for Division
//   describe('#division()', function() {
//     it('should return 2 when dividing 4 / 2', function() {
//       assert.strictEqual(4 / 2, 2);
//     });

//     it('should throw an error when dividing by 0', function() {
//       assert.throws(() => {
//         const result = 4 / 0;
//         if (result === Infinity) throw new Error('Cannot divide by zero');
//       }, /Cannot divide by zero/);
//     });

//     it('should complete asynchronously', function(done) {
//       setTimeout(function() {
//         assert.strictEqual(3 / 2, 1.5);
//         done(); // Call done() to indicate completion
//       }, 1000);
//     });

//     it('should resolve the promise', function() {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           assert.strictEqual(3 / 2, 1.5);
//           resolve();
//         }, 1000);
//       });
//     });

//     it('should complete async/await task', async function() {
//       const result = await new Promise((resolve) => setTimeout(() => console.log("testing async...")));
//       assert.strictEqual(result, 1.5);
//     });
//   });

//   // Test Suite for Modulus
//   describe('#modulus()', function() {
//     it('should return 1 when computing 10 % 3', function() {
//       assert.strictEqual(10 % 3, 1);
//     });
//   });

// });



  // Dynamically import Chai
  import { expect,assert} from 'chai';
  // import  from 'node:assert'

  describe('Calulate', function () {
    it('should return 4 when adding 2 + 2', function () {
      assert.strictEqual(2 + 2, 4);
    });

    it('should return 0 when adding -2 + 2', function () {
      assert.strictEqual(-2 + 2, 0);
    });

    it('should be true', function () {
      assert.isTrue(true, 'Value should be true');
    });

    it('should be false', function () {
      assert.isFalse(false, 'Value should be false');
    });

    it('should include value in array', function () {
      assert.include([1, 2, 3], 2, 'Array should include the value');
    });

    it('should include substring in string', function () {
      assert.include('hello world', 'world', 'String should include the substring');
    });
  });




























describe('Addition', function () {



  it('should return 4 when adding 2 + 2', function () {
    assert.strictEqual(2 + 2, 4);
  });

  it('should return 0 when adding -2 + 2', function () {
    assert.strictEqual(-2 + 2, 0);
  });

  // it.only('runs this test only', function() {
  //   // test code
  // });

  it('should retry if it fails', function () {
    this.retries(3);
    // test code

  });

});

describe('Subtraction', () => {
  it('should return 0 when subtracting 2 - 2', function () {
    assert.strictEqual(2 - 2, 0);
  });

  it('should return -4 when subtracting -2 - 2', function () {
    assert.strictEqual(-2 - 2, -4);
  });

  it('should complete in time', function (done) {
    this.timeout(2000); // 5 seconds
    setTimeout(()=>{
      done()
    }, 1000); // Call done() within the timeout period
  });



  it('should complete asynchronously', async function () {//if this callback is not async then underlying promise will not work as expected. Instead of await we can use .then
    this.timeout(3000); // 10 seconds
    await new Promise( (resolve) => {
      setTimeout(resolve, 2000)
    }); // Wait for 4 seconds
  });


  //these are build in node js assertion methods for testing.
  assert.equal(2 + 2, 4);
  assert.deepEqual({ a: 1 }, { a: 1 });
  assert.isTrue(true);
  assert.isFalse(false);
  assert.throws(() => { throw new Error('Error'); }, /Error/);
  assert.doesNotThrow(() => { /* code */ });
  assert.match('hello world', /world/);
  assert.include([1, 2, 3], 2);
  assert.include('hello world', 'world');
  

});

