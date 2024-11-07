namespace Geometry {
    export function areaOfCircle(radius: number): number {
      return Math.PI * radius * radius;
    }
  
    export function perimeterOfCircle(radius: number): number {
      return 2 * Math.PI * radius;
    }
  }
  
  namespace Physics {
    export function force(mass: number, acceleration: number): number {
      return mass * acceleration;
    }
  
    export function energy(mass: number, velocity: number): number {
      return 0.5 * mass * velocity * velocity;
    }
  }
  
  // Accessing functions from different namespaces
  console.log(Geometry.areaOfCircle(5));     // Output: 78.53981633974483
  console.log(Physics.force(10, 9.8));       // Output: 98
  