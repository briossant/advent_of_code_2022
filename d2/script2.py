
f = open("input.txt", "r").readlines()

acc = 0

win = {
        'A': 2,
        'B': 3,
        'C': 1
        }

loss = {
        'A': 3,
        'B': 1,
        'C': 2
        }

draw = {
        'A': 1,
        'B': 2,
        'C': 3
        }



for l in f:
    inp = l[:-1].split(' ')

    if inp[1] == 'X':
        acc += loss[inp[0]]
    elif inp[1] == 'Y':
        acc += 3 + draw[inp[0]]
    else:
        acc += 6 + win[inp[0]]


print(acc)
