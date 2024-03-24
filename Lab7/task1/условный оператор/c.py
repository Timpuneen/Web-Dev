# Считываем ответы из стандартного ввода
answer_system = int(input())
answer_student = int(input())

# Проверяем, совпадают ли ответы
if answer_system == 1 and answer_student != 1:
    print("NO")
elif answer_system != 1 and answer_student == 1:
    print("NO")
else:
    print("YES")
