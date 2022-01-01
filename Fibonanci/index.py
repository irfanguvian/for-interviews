def fibonanci(n):
    if n <= 1:
        return n
    else:
        return fibonanci(n-1) + fibonanci(n-2)


n = 0
count = int(input())
while (n < count):
    print(fibonanci(n), end=" ")
    n += 1
