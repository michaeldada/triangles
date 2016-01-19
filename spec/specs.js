describe('isTriangle', function(){
  it("is false when the sum of two sides are equal to or less than the third side", function(){
    expect(isTriangle([25,5,10])).to.equal(false);
  });
});
