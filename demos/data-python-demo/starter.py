""" print("hello world")

first_name = 'peng'
last_name = 'thao'

print(first_name + " " + last_name)

age = 16

if age >= 18:
    print('old')
elif age < 13: 
    print('infant')
else:
    print('teenybopper') """


""" favorite_numbers = [1,2,3,4,5,"hello",True, 2.5]

print(favorite_numbers)

for elem in favorite_numbers:
    print(elem) """

""" def sum(num_1, num_2):
    return num_1 + num_2
cc
print(sum(5,10)) """

open_file = open("FinalGrades.csv")

total_a = 0
total_b = 0
total_c = 0

""" for line in open_file:
   for elem in line:
        if elem == "A":
         total_a+= 1
        elif elem == "B":
            total_b+= 1
        elif elem == "C":
            total_c+= 1


print('Total A:', total_a)
print('Total B', total_b)
print('Total C', total_c) """


for line in open_file:
    line = line.strip()
    values = line.split(',')
    for elem in values:
        if elem == "A":
         total_a+= 1
        elif elem == "B":
            total_b+= 1
        elif elem == "C":
            total_c+= 1


print('Total A:', total_a)
print('Total B', total_b)
print('Total C', total_c) 

with open("FinalGrades.csv", 'r') as open_file2:
    for line in open_file2:
        line= line.strip()
        values = line.split(",")
        print(values[2:5])

open_file.close()

prime_number = float(1)

""" with open("FinalGrades.csv", 'r') as open_file:
    lines = open_file.readlines()

    # First loop for counting occurrences
    for line in lines:
        line = line.strip()
        values = line.split(',')
        for elem in values:
            if elem == "A":
                total_a += 1
            elif elem == "B":
                total_b += 1
            elif elem == "C":
                total_c += 1

    # Print total counts
    print('Total A:', total_a)
    print('Total B:', total_b)
    print('Total C:', total_c)

    # Second loop for printing specific elements
    for line in lines:
        line = line.strip()
        values = line.split(',')
        print(values[2:5]) """