var Geometry;
(function (Geometry) {
    function areaOfCircle(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.areaOfCircle = areaOfCircle;
    function perimeterOfCircle(radius) {
        return 2 * Math.PI * radius;
    }
    Geometry.perimeterOfCircle = perimeterOfCircle;
})(Geometry || (Geometry = {}));
var Physics;
(function (Physics) {
    function force(mass, acceleration) {
        return mass * acceleration;
    }
    Physics.force = force;
    function energy(mass, velocity) {
        return 0.5 * mass * velocity * velocity;
    }
    Physics.energy = energy;
})(Physics || (Physics = {}));
// Accessing functions from different namespaces
console.log(Geometry.areaOfCircle(5)); // Output: 78.53981633974483
console.log(Physics.force(10, 9.8)); // Output: 98
