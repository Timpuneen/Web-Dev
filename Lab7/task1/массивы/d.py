numbers = list(map(int, input().split()))

# Проходим по элементам списка, начиная с первого
for i in range(1, len(numbers)):
    # Проверяем, больше ли текущий элемент предыдущего
    if numbers[i] > numbers[i - 1]:
        print(numbers[i], end=' ')
