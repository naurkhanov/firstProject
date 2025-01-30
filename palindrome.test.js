const isPlaindrome = require('./palindrome')

test('recognizes racecar as a palindrome', () => {
	expect(isPlaindrome('racecar')).toBe(true)
})

test('recognizes hello as a palindrome', () => {
	expect(isPlaindrome('hello')).toBe(false)
})
