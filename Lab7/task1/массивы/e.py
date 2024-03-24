numbers = list(map(int, input().split()))

# Проходим по элементам списка, начиная со второго
for i in range(1, len(numbers)):
    # Проверяем знаки соседних элементов
    if numbers[i] * numbers[i - 1] > 0:
        # Если знаки одинаковые, выводим эти числа и завершаем программу
        print(numbers[i - 1], numbers[i])
        break
