def power(a, n):
    return a ** n

# Чтение входных данных из стандартного потока ввода
a, n = map(float, input().split())

print(power(a, int(n)))
