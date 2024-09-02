//this method will execute and print before each test 
beforeEach(() => {
    console.log("Working before test")
});


//this method will execute and print before each test 
afterEach(() => {
      console.log("Working after test")
  });

//this file will be used to test all the scripts we have written
// we need to require the script first which we want to test
//no need to import jest in case of common js
//is ESM is used in package.json then we must import @jest/global

const sum = require('./app1');

                            //------------------Basic------------------------

//------------Matcher------------
//toBe is Matcher which matches cmd.
test('adding 1+2 to equal 3',()=>{
    expect(sum(1,2)).toBe(3);
})


//to Equal is used for exact equal
test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });
test('second object assignment', () => {
    const data = {one: 5};
    data['two'] = 3;
    expect(data).toEqual({one: 5, two: 3});
  });

//--------truthiness-------------
  test('null', () => {
    const n = undefined;
    // expect(n).toBeNull(); //true
    // expect(n).toBeDefined(); // true
    expect(n).toBeUndefined(); 
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();//is it defind or not wheather it is null / undefined
    expect(z).not.toBeUndefined();//is it undefined
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();// checks wheather value is 0 or 1
  });

  //----------Numbers------------
  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });



  
  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });



  //You can check Strings against Regular expressions with toMatch
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });


  //testing values of an array toContain ,
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });

  //to check anu unexpted error
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
  }
  
  test('compiling android goes as expected', () => {
    if(expect(() => compileAndroidCode()).toThrow() == null){
        console.log("<<<test case pass>>>", typeof expect(() => compileAndroidCode()).toThrow())
    }

    expect(() => compileAndroidCode()).toThrow(Error);
  
    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  
    // Or you can match an exact error message using a regexp like below
    // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
    // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
  });

                            //------------------Basic------------------------
//------Asynchronous  Testing-------------
function fetchData(callback){
    if(callback!=undefined){
        return new Promise((res,rej)=>{
            callback("Callback has beed called","Wprkong")
            rej("Rejected")
        })
    }
    return new Promise((res,rej)=>{
        res("approoved")
        // rej("rejected")
    })

    
}
//---------promise...-------------
test('the data is peanut butter', () => {
return fetchData().then(data => {
    expect(data).toBe('approoved');
}).catch(err=>console.log(err));
});



  //-------------async-----------

  test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('approoved');
  });
  
  test('the fetch fails with an error', async () => {
    //assertion is used to define number of expectations i can use within a test case.
    // expect.assertions(1);
    try {
      await fetchData().then((res)=>[
        console.log("success")
      ]);
    } catch (error) {
      expect(error).toMatch('Rejected');
    }
  });


//----------------callbacks---------------
test('the data is peanut butter', (done) => {
    function callback(data, error) {
      if (error==undefined) {
        return
      }
      try {
        expect(data).toBe('Callback has beed called');
        done()
        //done should use without any arguement if that section of code not supposed to throw any error 
      } catch (error) {
        done("It is try after factch error : ")//it will work because the section of with catch is sopposed to print some error message.
      }
    }
    fetchData(callback).then(res=>{
        console.log(res)
    }).catch((rej)=>{
        console.log("errer printing: ")
    });
   
  });


test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('approoved');
  });
  
//   test('the fetch fails with an error', async () => {
//     await expect(fetchData()).rejects.toMatch('Rejected');
//   });