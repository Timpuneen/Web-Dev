numbers = list(map(int, input().split()))

# Инициализируем счетчик положительных элементов
positive_count = 0

# Подсчитываем количество положительных элементов
for num in numbers:
    if num > 0:
        positive_count += 1

print(positive_count)
