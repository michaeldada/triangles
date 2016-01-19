describe('isTriangle', function(){
  it("is false when the sum of two sides are equal to or less than the third side", function(){
    expect(isTriangle(25,6,5)).to.equal(false);
  });

  it("is 'equalateral' when all sides are equal", function(){
    expect(isTriangle(15,15,15)).to.equal("equilateral")
  });

  it("is 'isosceles' if exactly two sides are equal", function(){
    expect(isTriangle(15,15,10)).to.equal("isosceles")
  });

  it("is 'scalene' if no sides are equal", function(){
    expect(isTriangle(4,5,6)).to.equal("scalene")
  });
});
