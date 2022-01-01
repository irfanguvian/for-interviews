def menara(lvl):
    for i in range(lvl+1):
        for j in range(lvl-i):
            print(" ", end="")
        for k in range(i):
            print(" *", end="")
        print("")


menara(5)
