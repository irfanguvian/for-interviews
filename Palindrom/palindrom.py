def isPalindrom(s):
    return s == s[::-1]


s = input()

if isPalindrom(s):
    print("yes")
else:
    print("no")
