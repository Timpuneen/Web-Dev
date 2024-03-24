def xor(x, y):
    return int((x or y) and not (x and y))

# Чтение входных данных из стандартного потока ввода
x, y = map(int, input().split())

print(xor(x, y))


