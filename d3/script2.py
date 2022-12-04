
f = open("input.txt", "r").readlines()

acc = 0
gp = []

for l in f:
    gp.append(l[:-1])
    if len(gp) == 3:
        
        i=0
        while gp[0][i] not in gp[1] or gp[0][i] not in gp[2]:
            i+=1
        print(gp[0][i]) 
        if ord(gp[0][i]) < 92:
            acc += ord(gp[0][i]) - 65+27
        else:
            acc += ord(gp[0][i]) - 96
        gp=[]    
    


print(acc)
