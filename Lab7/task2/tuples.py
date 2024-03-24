if __name__ == '__main__':
    n = int(input())  # Number of elements in the tuple
    integer_list = map(int, input().split())  # List of integers

    # Create a tuple from the list of integers
    tuple_integers = tuple(integer_list)

    # Print the hash value of the tuple
    print(hash(tuple_integers))
