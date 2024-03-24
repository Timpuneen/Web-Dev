# Считываем номер года из стандартного ввода
year = int(input())

# Проверяем, является ли год високосным
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")
