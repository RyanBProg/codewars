# Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

#  Three 1's => 1000 points
#  Three 6's =>  600 points
#  Three 5's =>  500 points
#  Three 4's =>  400 points
#  Three 3's =>  300 points
#  Three 2's =>  200 points
#  One   1   =>  100 points
#  One   5   =>   50 point
# A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

# Example scoring

#  Throw       Score
#  ---------   ------------------
#  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
#  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
#  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
# Note: your solution must not modify the input list.

def score(dice):
    score = 0
    sequences = {}
    
    for num in dice:
        sequences[num] = sequences.get(num, 0) + 1
        
    for key, value in sequences.items():
        if key == 1:
            if value < 3:
                score += (key * 100) * value
            elif value >= 3:
                score += (key * 1000) + ((key * 100) * (value - 3))
                
        elif key == 5:
            if value < 3:
                score += (key * 10) * value
            elif value >= 3:
                score += (key * 100) + ((key * 10) * (value - 3))
            
        elif value >= 3:
            score += key * 100
            
    return score