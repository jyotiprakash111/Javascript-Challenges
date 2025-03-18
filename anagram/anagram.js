// 1. Check if Two Strings Are Anagrams
// Problem: Write a function that checks if two given strings are anagrams of each other.

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent"));  // true
console.log(isAnagram("hello", "world"));    // false
    

// 2. Find All Anagrams of a Word in an Array
// Problem: Given a list of words, return all words that are anagrams of a given word.

findAnagrams("listen", ["enlist", "google", "silent", "tinsel", "banana"]);  
// Output: ["enlist", "silent", "tinsel"]


function findAnagrams(target, words) {
    const sortedTarget = target.split("").sort().join("");

    return words.filter(word => word.split("").sort().join("") === sortedTarget);
}

console.log(findAnagrams("listen", ["enlist", "google", "silent", "tinsel", "banana"]));


// 3. Find Anagram Pairs in an Array

// Problem: Given an array of words, return all pairs of words that are anagrams.
findAnagramPairs(["listen", "silent", "hello", "world", "tinsel", "enlist"]);  
// Output: [ ["listen", "silent"], ["listen", "tinsel"], ["listen", "enlist"], ["silent", "tinsel"], ["silent", "enlist"], ["tinsel", "enlist"] ]


function findAnagramPairs(words) {
    let pairs = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isAnagram(words[i], words[j])) {
                pairs.push([words[i], words[j]]);
            }
        }
    }
    return pairs;
}

console.log(findAnagramPairs(["listen", "silent", "hello", "world", "tinsel", "enlist"]));

// 4. Group Anagrams Together
// Problem: Given an array of words, group all anagrams together.

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);  
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

function groupAnagrams(words) {
    let map = new Map();

    for (let word of words) {
        let sorted = word.split("").sort().join("");
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(word);
    }

    return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// 5. Find the Minimum Number of Steps to Make Two Strings Anagrams
// Problem: Given two strings, determine the minimum number of character deletions required to make them anagrams.
// Example: