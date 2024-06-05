import sys

for line in sys.stdin:
    data = line.split(',')
    if (data[0] == 'MSFT'):
      print(data[1] + ',' + data[2])