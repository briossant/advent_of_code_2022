
f = open("input.txt", "r").readlines()

acc = 0

for l in f:
    l = l[:-1]
    l1 = l[:len(l)//2]
    l2 = l[len(l)//2:]
    i=0
    while l1[i] not in l2:
        i+=1
    
    if ord(l1[i]) < 92:
        acc += ord(l1[i]) - 65+27
    else:
        acc += ord(l1[i]) - 96
    
    


print(acc)
