
f = open("input.txt", "r").readlines()

ls = []
acc = 0

for l in f:
    if l == "\n":
        ls.append(acc)
        acc = 0
    else:
        acc += int(l[:-1])
    

ls.sort()
print(sum(ls[-3:]))
