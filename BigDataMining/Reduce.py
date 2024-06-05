import sys

high = 0

for line in sys.stdin:
    data = line.split(',')
    close = float(data[1].rstrip())   # get rid of newline

    if (close > high):
      high = close
      date = data[0]

print(date + ',' + str(high))