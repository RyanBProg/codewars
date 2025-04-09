# Given a string of words, you need to find the highest scoring word.

# Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

# For example, the score of abad is 8 (1 + 2 + 1 + 4).

# You need to return the highest scoring word as a string.

# If two words score the same, return the word that appears earliest in the original string.

# All letters will be lowercase and all inputs will be valid.

import string

def high(x):
    alphabet = string.ascii_lowercase
    
    words = x.split(" ")
    currentHighest = { "winning": "", "score": 0 }
    
    for word in words:
        score = 0
        for letter in word:
            score = score + alphabet.index(letter) + 1
        
        if score > currentHighest["score"]:
            currentHighest["winning"] = word
            currentHighest["score"] = score
         
    return currentHighest["winning"]