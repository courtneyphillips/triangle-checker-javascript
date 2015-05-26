describe('triangleChecker', function() {
  it("returns equilateral when 3 sides with same size are input", function(){
    expect(triangleChecker(10,10,10)).to.equal("Equilateral");
  });

  it("returns scalene when 3 sides with different sizes are input", function(){
    expect(triangleChecker(10,11,12)).to.equal("Scalene");
  });

  it("returns isosceles when 2 sides with same sizes are input", function(){
    expect(triangleChecker(10,11,10)).to.equal("Isosceles");
  });

  it("returns when three given values cannot create a triangle", function(){
    expect(triangleChecker(2,2,8)).to.equal("Not a Triangle");
  });

});
