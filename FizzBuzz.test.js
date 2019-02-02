const FizzBuzz = require('./FizzBuzz');

test ('A number is fizz if it is divisible by 3 or if it has a 3 in it', () => {
    expect(FizzBuzz(3)).toBe("Fizz")
})

test ('A number is Buzz if it is divisible by 5 or if it has a 5 in it', () => {
    expect(FizzBuzz(5)).toBe("Buzz")
})

test ('A number is fizz if it is divisible by 3 or if it has a 3 in it', () => {
    expect(FizzBuzz(9)).toBe("Fizz")
})

test ('A number is FizzBuzz if it is divisible by 3,5 or if it has a 3,5 in it', () => {
    expect(FizzBuzz(15)).toBe("FizzBuzz")
})

test ('A number is same if it is Division 3 and 5 is incomplete', () => {
    expect(FizzBuzz(2)).toBe("2")
})

test ('Your number exceeds 100', () => {
    expect(FizzBuzz(102)).toBe("102")
})

test ('33', () => { 
    expect(FizzBuzz(33)).toBe("Fizz")
})

test ('55', () => { 
    expect(FizzBuzz(55)).toBe("Buzz")
})

test ('53', () => { 
    expect(FizzBuzz(53)).toBe("FizzBuzz")
})

test ('35', () => {
    expect(FizzBuzz(35)).toBe("FizzBuzz")
})