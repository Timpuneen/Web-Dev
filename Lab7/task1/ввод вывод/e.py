# Считываем скорость и время
v = int(input())
t = int(input())

# Вычисляем путь
distance = v * t

# Находим отметку на МКАДе
mark = (distance % 109)

print(mark)
