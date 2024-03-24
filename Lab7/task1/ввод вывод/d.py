# Считываем количество школьников и яблок
N = int(input())
K = int(input())

# Находим количество яблок, которые останутся в корзинке
apples_left = K % N

print(apples_left)
