function Triangulo(a, b, c) {
    // Verifica se os lados formam um triângulo válido
    if (a + b <= c || a + c <= b || b + c <= a) {
      return "none";
    }
  
    // Verifica se o triângulo é equilátero
    if (a == b && b == c) {
      return "equilateral";
    }
  
    // Verifica se o triângulo é isósceles
    if (a == b || a == c || b == c) {
      return "isosceles";
    }
  
    // O triângulo é escaleno
    return "scalene";
  }
  
  



console.log(Triangulo(10,10,2))