// ========================
// DO NOT REMOVE THE EXPORT KEYWORDS
// ========================

/**
<<<<<<< HEAD
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers between 1 and a destination.
 * (1 to destination) where destination is a number greater than 1 and destination is included when calculating the sum.
 *
 *
 * @param {number} destination is the stopping number
 * @returns number the sum of the numbers from 1 to destination
 */
export function sumOfNumbersTo(destination) {
    console.log(destination)
    // write your code here
    return 0
}

/**
 * Challenge - 2
 *
 * Calculate count, sum and put each even number in an array, from 0 to a destination. The returned object should have the following keys: count, sum, arrayOfEvenNumbers.
 *
 * @param {number} destination the stopping number
 * @returns the object containing count, sum, arrayOfEvenNumbers from 1 to destination
 */
export function evenNumbersWithin(destination) {
    console.log(destination)
    // get the number from 0 to destination
    const sum = 0
    const count = 0
    const arrayOfEvenNumbers = []

    // write your code here

    return {
        count,
        sum,
        arrayOfEvenNumbers,
    }
}

/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 *
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
export function celsiusToFahrenheit(arrayOfNumbers) {
    console.log(arrayOfNumbers)
    const result = []

    // write your code here

    return result
}

/**
 * Challenge - 4
 *
 * Calculates the count and sum of odd numbers from 0 to the given destination.
 * Stores each odd number in an array. Returns an object with count, sum, and arrayOfOddNumbers.
 *
 * @param {number} destination the destination number
 * @returns {object} the count, sum, and arrayOfOddNumbers
 */
export function oddNumbersWithin(destination) {
    console.log(destination)
    // get the number from 0 to destination
    const sum = 0
    const count = 0
    const arrayOfOddNumbers = []

    // write your code here

    return {
        count,
        sum,
        arrayOfOddNumbers,
    }
}

/**
 * Challenge - 5
 *
 * Given an array of numbers, find all numbers that are multiples of a given factor.
 * Return an object containing the count of multiples, their sum, and an array of the multiples.
 *
 * @param {Array} arrayOfNumbers the array of numbers to check
 * @param {number} factor the factor to check multiples for
 * @returns {object} the count, sum, and arrayOfMultiples
 */
export function findMultiples(arrayOfNumbers, factor) {
    console.log(arrayOfNumbers, factor)
    const sum = 0
    const count = 0
    const arrayOfMultiples = []

    // write your code here

    return {
        count,
        sum,
        arrayOfMultiples,
    }
}

/**
 * Challenge - 6
 *
 * Given an array of numbers, calculate the factorial of each number and return a new array.
 * The factorial of a number n is the product of all positive integers less than or equal to n.
 * For example: 5! = 5 × 4 × 3 × 2 × 1 = 120
 * Note: 0! = 1 and negative numbers should return 0.
 *
 * @param {Array} arrayOfNumbers the array of numbers to calculate factorials for
 * @returns {Array} the array of factorial results
 */
export function calculateFactorials(arrayOfNumbers) {
    console.log(arrayOfNumbers)
    const result = []

    // write your code here

    return result
}

/**
 * Challenge - 7
 *
 * Given an array of numbers, find all prime numbers and return an object containing
 * the count of primes, their sum, and an array of the prime numbers found.
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 *
 * @param {Array} arrayOfNumbers the array of numbers to check for primes
 * @returns {object} the count, sum, and arrayOfPrimes
 */
export function findPrimeNumbers(arrayOfNumbers) {
    console.log(arrayOfNumbers)
    const sum = 0
    const count = 0
    const arrayOfPrimes = []

    // write your code here

    return {
        count,
        sum,
        arrayOfPrimes,
    }
}

/**
 * Challenge - 8
 *
 * Given an array of numbers, return the double of the values
 *
 * @param {Array} arrayOfNumbers the array of numbers to double
 * @returns {Array} the array of doubled numbers
 */
export function doubleTheValues(arrayOfNumbers) {
    console.log(arrayOfNumbers)
    const result = []

    // write your code here

    return result
}

// ========================
// DO NOT REMOVE THE EXPORT KEYWORDS
// ========================
=======
 * Challenge 1
 * Sum 1..destination (inclusive).
 */
export function sumOfNumbersTo(destination) {
  if (!Number.isFinite(destination) || destination < 1) return 0
  return (destination * (destination + 1)) / 2
}

/**
 * Challenge 2
 * Even numbers 0..destination → { count, sum, arrayOfEvenNumbers }.
 */
export function evenNumbersWithin(destination) {
  const arrayOfEvenNumbers = []
  if (!Number.isFinite(destination) || destination < 0) {
    return { count: 0, sum: 0, arrayOfEvenNumbers }
  }
  for (let i = 0; i <= destination; i += 1) {
    if ((i & 1) === 0) arrayOfEvenNumbers.push(i)
  }
  const sum = arrayOfEvenNumbers.reduce((a, b) => a + b, 0)
  return { count: arrayOfEvenNumbers.length, sum, arrayOfEvenNumbers }
}

/**
 * Challenge 3
 * Celsius array → Fahrenheit array, rounded to nearest integer.
 */
export function celsiusToFahrenheit(arrayOfNumbers) {
  if (!Array.isArray(arrayOfNumbers)) return []
  return arrayOfNumbers.map((c) => Math.round((c * 9) / 5 + 32))
}

/**
 * Challenge 4
 * Odd numbers 1..destination → { count, sum, arrayOfOddNumbers }.
 */
export function oddNumbersWithin(destination) {
  const arrayOfOddNumbers = []
  if (!Number.isFinite(destination) || destination < 1) {
    return { count: 0, sum: 0, arrayOfOddNumbers }
  }
  for (let i = 1; i <= destination; i += 1) {
    if ((i & 1) === 1) arrayOfOddNumbers.push(i)
  }
  const sum = arrayOfOddNumbers.reduce((a, b) => a + b, 0)
  return { count: arrayOfOddNumbers.length, sum, arrayOfOddNumbers }
}

/**
 * Challenge 5
 * Multiples of factor from array → { count, sum, arrayOfMultiples }.
 */
export function findMultiples(arrayOfNumbers, factor) {
  const arrayOfMultiples = Array.isArray(arrayOfNumbers) && Number.isFinite(factor) && factor !== 0
    ? arrayOfNumbers.filter((n) => Number.isFinite(n) && n % factor === 0)
    : []
  const sum = arrayOfMultiples.reduce((a, b) => a + b, 0)
  return { count: arrayOfMultiples.length, sum, arrayOfMultiples }
}

/**
 * Challenge 6
 * Factorial for each number in array.
 * factorial(0)=1; negatives or non-integers → NaN.
 */
export function calculateFactorials(arrayOfNumbers) {
  if (!Array.isArray(arrayOfNumbers)) return []
  const fact = (n) => {
    if (!Number.isInteger(n) || n < 0) return NaN
    if (n === 0 || n === 1) return 1
    let acc = 1
    for (let i = 2; i <= n; i += 1) acc *= i
    return acc
  }
  return arrayOfNumbers.map(fact)
}

/**
 * Challenge 7
 * Primes from array → { count, sum, arrayOfPrimes }.
 */
export function findPrimeNumbers(arrayOfNumbers) {
  if (!Array.isArray(arrayOfNumbers)) {
    return { count: 0, sum: 0, arrayOfPrimes: [] }
  }
  const isPrime = (n) => {
    if (!Number.isInteger(n) || n < 2) return false
    if (n === 2) return true
    if (n % 2 === 0) return false
    const limit = Math.floor(Math.sqrt(n))
    for (let i = 3; i <= limit; i += 2) if (n % i === 0) return false
    return true
  }
  const arrayOfPrimes = arrayOfNumbers.filter(isPrime)
  const sum = arrayOfPrimes.reduce((a, b) => a + b, 0)
  return { count: arrayOfPrimes.length, sum, arrayOfPrimes }
}

/**
 * Challenge 8
 * Double each value in array.
 */
export function doubleTheValues(arrayOfNumbers) {
  if (!Array.isArray(arrayOfNumbers)) return []
  return arrayOfNumbers.map((n) => n * 2)
}
>>>>>>> 853bc9e (Complete challenges 1-8 with tests passing)
