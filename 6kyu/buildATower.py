# Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

# For example, a tower with 3 floors looks like this:

# [
#   "  *  ",
#   " *** ", 
#   "*****"
# ]
# And a tower with 6 floors looks like this:

# [
#   "     *     ", 
#   "    ***    ", 
#   "   *****   ", 
#   "  *******  ", 
#   " ********* ", 
#   "***********"
# ]

def tower_builder(n_floors):
    tower = []

    for i in range(n_floors):
        spaces = ' ' * (n_floors - i - 1)
        stars = '*' * (2 * i + 1)
        tower.append(spaces + stars + spaces)

    return tower