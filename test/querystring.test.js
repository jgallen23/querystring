suite('querystring', function() {
  suite('#parse()', function(){
    test('should return an empty object when no value is present',function(){
      assert.equal(
        JSON.stringify(
          querystring.parse('')
        ),
        JSON.stringify(
          {}
        )
      );
    });
    test('should return an empty object when value passed is other than String',function(){
      assert.equal(
        JSON.stringify(
          querystring.parse([1,2,3])
        ),
        JSON.stringify(
          {}
        )
      );
    });
    test('should return a parsed object when a query string is passed',function(){
      assert.equal(
        JSON.stringify(
          querystring.parse('foo=bar&baz=qux&baz=quux&corge')
        ),
        JSON.stringify(
          { foo: 'bar', baz: ['qux', 'quux'], corge: '' }
        )
      );
    });
    test('should return a parsed object using the window.location.search if no argument is passed',function(){
      assert.equal(
        JSON.stringify(
          querystring.parse()
        ),
        JSON.stringify(
          querystring.parse(window.location.search)
        )
      );
    });
  });
  suite('#stringify()', function(){
    test('should return an empty String when no value is present',function(){
      assert.equal(querystring.stringify(),'');
    });
    test('should return an empty object when value passed is other than Object',function(){
      assert.equal(querystring.stringify([1,2,3]),'');
    });
    test('should return a stringied object when an object is passed',function(){
      assert.equal(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }),'foo=bar&baz=qux&baz=quux&corge=');
    });
  });
});