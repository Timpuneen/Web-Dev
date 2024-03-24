numbers = list(map(int, input().split()))

# Инициализируем переменные для хранения максимального значения и его индекса
max_value = numbers[0]
max_index = 0

# Проходим по всем элементам списка, начиная со второго
for i in range(1, len(numbers)):
    # Если текущий элемент больше максимального значения, обновляем максимальное значение и его индекс
    if numbers[i] > max_value:
        max_value = numbers[i]
        max_index = i

# Выводим значение наибольшего элемента и его индекс
print(max_value, max_index)
