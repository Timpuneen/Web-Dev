numbers = list(map(int, input().split()))

# Инициализируем счетчик элементов, которые больше двух своих соседей
count = 0

# Проходим по элементам списка, начиная со второго и заканчивая предпоследним
for i in range(1, len(numbers) - 1):
    # Проверяем условие задачи
    if numbers[i] > numbers[i - 1] and numbers[i] > numbers[i + 1]:
        count += 1

print(count)
