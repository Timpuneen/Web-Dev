if __name__ == '__main__':
    n = int(input())  # Number of students' records
    student_marks = {}  # Dictionary to store students' marks

    # Reading and storing the marks of each student
    for _ in range(n):
        name, *marks = input().split()  # Read the name and marks as input
        marks = list(map(float, marks))  # Convert marks to floats
        student_marks[name] = marks  # Store marks in the dictionary

    query_name = input()  # Name of the student to query

    # Calculate the average marks for the queried student
    avg_marks = sum(student_marks[query_name]) / len(student_marks[query_name])

    # Print the average marks rounded to 2 decimal places
    print("{:.2f}".format(avg_marks))
