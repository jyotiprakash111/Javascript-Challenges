// Q:- Remove Duplicate objects

const data = [
  { a: 5 },
  { a: 5 },
  { c: 10 },
  { b: 20, d: 25 },
  { b: 20, d: 25 },
  { a: 5, b: 20, c: 10, d: 25 },
]

const uniqueData = new Set()
for (const obj of data) {
  uniqueData.add(JSON.stringify(obj))
}

const result = [...uniqueData].map((str) => JSON.parse(str))

console.log(result)

const input = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1]

const numbers = []
const strings = []

for (const item of input) {
  if (typeof item === "number") {
    numbers.push(item)
  } else {
    strings.push(item)
  }
}

const result2 = [...numbers, ...strings]

console.log(result2)


