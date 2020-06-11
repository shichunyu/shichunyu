---
title: Bitwise Operators
date: 2020.06.09
---

```toc

```

# Resources

- [Binary - learn.sparkfun.com](https://learn.sparkfun.com/tutorials/binary/binary-in-programming)
- [Amazing Youtube Video on Signed Binary Numbers](https://www.youtube.com/watch?v=4qH4unVtJkE)

# Complement (Not) `~`
Reverses the binary values:

```
NOT 10110101 (decimal 181)
    -------- =
    01001010 (decimal 74)

```

## Usage in Python
In Python, using the `~` operator results in something unexpected.

If we run this in python, we get:
```python
print(~4) # -5
```

This is because Python uses what's called [Two's Complement](https://en.wikipedia.org/wiki/Two's_complement) in how [signed numbers](https://en.wikipedia.org/wiki/Signed_number_representations) are represented in binary.

Watch this amazing [Youtube video](https://www.youtube.com/watch?v=4qH4unVtJkE) for an explanation of how signed numbers work in binary.

When we use `~` operator in Python, it simply flips the 0s and 1s.

In Python, using Two's Complement, here are the binary representations for numbers:

```
1000 -8
1001 -7
1010 -6
1011 -5
1100 -4
1101 -3
1110 -2
1111 -1
0000  0
0001  1
0010  2
0011  3
0100  4
0101  5
0110  6
0111  7
```

Notice how with 4 bits, our range is from -8 -> 7.

We we use `~4` here is what happens:
```
0100 -> 4
1011 -> ~4
```
Look up `1011` in the table above, and that is `-5`

So in order to go from `4` to `-4` we need to add `1` to `~4`

```
0100 -> 4
1011 -> -5
1100 -> -4
```

So if we want to flip the sign of a number, we use `~4 + 1`

# OR `|`
If **either** bit is a 1, then will become a 1.

```
0 OR 0 = 0
0 OR 1 = 1
1 OR 0 = 1
1 OR 1 = 1

   10011010 
OR 01000110
   -------- =
   11011110
```

## Usage in Python
```python
print(2|3) # 3
print(15|24) # 31
```

```
2:   10         15: 01111
3:   11         24: 11000
2|3: 11      15|24: 11111 = 31
```


# AND `&`
If **both** bits are 1s, then it will become a 1

```
0 AND 0 = 0
0 AND 1 = 0
1 AND 0 = 0
1 AND 1 = 1

    10011010
AND 01000110
    -------- =
    00000010    
```

## Usage in Python
```python
print(2&3) # 2
print(15&24) # 8
```

```
2:   10         15: 01111
3:   11         24: 11000
2|3: 10      15|24: 01000 = 8
```

# XOR `^`
Only if **either** but **NOT both** bits are 1s, then will become a 1
Only if there is a 0 and a 1 then will become a 1.

```
0 XOR 0 = 0
0 XOR 1 = 1
1 XOR 0 = 1
1 XOR 1 = 0

    10011010
XOR 01000110
    -------- =
    11011100
```

## Usage in Python
```python
print(2^3) # 1
print(15^24) # 23
```

```
2:   10         15: 01111
3:   11         24: 11000
2|3: 01      15|24: 10111 = 23
```

# Bit Shifts `<<` `>>`
Moves all 1's either to the left or the right by a certain amount.
Anything that gets cut off on the right side is gone.

```
RIGHT-SHIFT-2 10011010 (decimal 154)
              -------- = 
              00100110 (decimal 38)

LEFT-SHIFT-1 10011010 (decimal 154)
             -------- =
            100110100 (decimal 308)
```

## Usage in Python
Shifting is a useful way to multiply / divide by powers of two:

```python
print(8>>1) # divide 8/2 = 4
print(2<<2) # multiply by 2 twice 2*2*2 = 8
```

```
8: 1000 >> 1 becomes 0100 = 4
2: 0010 << 2 becomes 1000 = 9
```