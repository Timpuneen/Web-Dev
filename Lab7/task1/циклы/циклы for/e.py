
a = float(input())
n = int(input())

# Инициализируем переменную для хранения суммы
sum = 0

# Проходим по всем степеням числа a от 0 до n и добавляем их к сумме
for i in range(n + 1):
    sum += a ** i

print(sum)
