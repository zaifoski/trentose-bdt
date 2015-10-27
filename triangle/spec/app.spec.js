describe("Triangle", function() {
    
  /* isTriangle */

  describe("isTriangle",function(){
    it("should properly identify valid triangles", function() {
        var value = TryAngle.isTriangle(1,2,3);
        expect(value).toBe(true);
    });
  
    it("should properly identify non valid triangles", function() {
        var value = TryAngle.isTriangle(1,1,100);
        expect(value).toBe(false);      
        //pending(); //come non scrivere la funzione
    });
  });
    
  /* getTypeBySidesLength */
  
  describe("getTypeBySidesLength",function(){
    
    it("should properly identify equilateral triangles", function() {
        var value = TryAngle.getTypeBySidesLength(1,1,1);
        expect(value).toBe(TryAngle.SIDE_EQUILATERAL);
    });
    it("should properly identify isosceles triangles", function() {
        var value = TryAngle.getTypeBySidesLength(2,3,2);
        expect(value).toBe(TryAngle.SIDE_ISOSCELES);
        var value = TryAngle.getTypeBySidesLength(2,2,3);
        expect(value).toBe(TryAngle.SIDE_ISOSCELES);
        var value = TryAngle.getTypeBySidesLength(3,2,2);
        expect(value).toBe(TryAngle.SIDE_ISOSCELES);
    });
    it("should properly identify scalene triangles", function() {
        var value = TryAngle.getTypeBySidesLength(2,3,4);
        expect(value).toBe(TryAngle.SIDE_SCALENE);
    });
    it("should properly handle non valid triangles", function() { //non serve perché io chiamerò prima la isTriangle
        pending(); //come non scrivere la funzione
    });
  });
    
  /* getTypeByAngles */
  
  describe("getTypeByAngles",function(){

    it("should properly identify acute triangles", function() {
        var value = TryAngle.getTypeByAngles(50,60,70);
        expect(value).toBe(ANGLE_ACUTE);
    });
    it("should properly identify obtuse triangles", function() {
        var value = TryAngle.getTypeByAngles(100,50,30);
        expect(value).toBe(ANGLE_OBTUSE);
        var value = TryAngle.getTypeByAngles(50,100,30);
        expect(value).toBe(ANGLE_OBTUSE);
        var value = TryAngle.getTypeByAngles(50,30,100);
        expect(value).toBe(ANGLE_OBTUSE);
    });
    it("should properly identify right triangles", function() {
        var value = TryAngle.getTypeByAngles(90,30,60);
        expect(value).toBe(ANGLE_RIGHT);
        var value = TryAngle.getTypeByAngles(30,90,60);
        expect(value).toBe(ANGLE_RIGHT);
        var value = TryAngle.getTypeByAngles(30,60,90);
        expect(value).toBe(ANGLE_RIGHT);
    });
  });
  
});
