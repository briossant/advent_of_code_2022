
f = open("input.txt", "r").readlines()

acc = 0

for l in f:
    inp = l[:-1].split(' ')

    if inp[0] == 'A' and inp[1] == 'Z':
        acc += 0    
    elif inp[0] == 'C' and inp[1] == 'X':
        acc += 6
    elif ord(inp[0]) - ord('A') < ord(inp[1]) - ord('X'):
        acc += 6
    elif ord(inp[0]) - ord('A') == ord(inp[1]) - ord('X'):
        acc += 3
    else:
        print(inp)
    acc += ord(inp[1])-ord('X')+1

    
    


print(acc)
