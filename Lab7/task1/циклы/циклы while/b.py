
n = int(input())

# Инициализируем наименьший делитель числа n
smallest_divisor = None

# Проходим по всем натуральным числам от 2 до квадратного корня из n
for i in range(2, int(n**0.5) + 1):
    # Если i делит n без остатка, то i - наименьший делитель
    if n % i == 0:
        smallest_divisor = i
        break

# Если наименьший делитель не был найден в цикле, то n само по себе является простым числом
if smallest_divisor is None:
    smallest_divisor = n


print(smallest_divisor)
