from collections import Counter

# User defined modules 
def calculate_mode(strings):
    '''Function to calculate mode of given list of strings [used in calculating the class_marks_average]'''

    # Count occurrences of each string in the list
    string_counts = Counter(strings)
    
    # Find the most common string(s)
    most_common = string_counts.most_common()
    
    # Get the highest count
    highest_count = most_common[0][1]
    
    # Filter strings with the highest count (there might be more than one mode)
    modes = [string for string, count in most_common if count == highest_count]
    
    return modes

x = calculate_mode(["high","low","high"])
print(x)