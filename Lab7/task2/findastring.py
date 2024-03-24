def count_substring(string, substring):
    count = 0
    for i in range(len(string)):
        if string[i:i+len(substring)] == substring:
            count += 1
    return count

if __name__ == '__main__':
    string = input().strip()
    substring = input().strip()
    
    count = count_substring(string, substring)
    print(count)
