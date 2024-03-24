numbers = list(map(int, input().split()))

# Выводим элементы списка с четными индексами
for num in numbers[::2]:
    print(num, end=' ')
