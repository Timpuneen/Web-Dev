numbers = list(map(int, input().split()))

# Выводим все четные элементы списка
for num in numbers:
    if num % 2 == 0:
        print(num, end=' ')
