# Функция для вычисления факториала числа
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

n = int(input())
k = int(input())

# Вычисляем факториалы чисел n, k и n-k
factorial_n = factorial(n)
factorial_k = factorial(k)
factorial_n_minus_k = factorial(n - k)

# Вычисляем значение C_k^n
Ckn = factorial_n // (factorial_k * factorial_n_minus_k)

print(Ckn)
