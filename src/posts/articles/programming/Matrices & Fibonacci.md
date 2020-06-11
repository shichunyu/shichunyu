---
title: Matrices & The Fibonnacci Sequence
date: 2020.06.10
---

```toc

```

# Resources

-   [Khan Academy Youtube](https://www.youtube.com/channel/UC4a-Gbdw7vOaccHmFo40b9g)

# How Matrices Work

## Basic Operations

### Addition, Subtraction & Scalar Multiplication

```
    1 2 3      1 2 3            2  4  6
A = 4 5 6  B = 4 5 6   A + B =  8 10 12
    7 8 9      7 8 9           14 16 18
```

```
        1*k 2*k 3*k
k * A = 4*k 5*k 6*k
        7*k 8*k 9*k
        
A - B = A + -1 * (B)
```

### Matrix Multiplication

```
A = 1 2   B = 5 6   A*B = (1*5+2*7) (1*6+2*8) =  (5+14)  (6+16) = 19 22
    3 4       7 8         (3*5+4*7) (3*6+4*8)   (15+28) (18+32)   43 50
```

**Note:** `A*B != B*A`

```
B = 5 6   A = 1 2   B*A = (5*1+6*3) (5*2+6*4) = (5+18) (10+24) = 23 34
    7 8       3 4         (7*1+8*3) (7*2+8*4)   (7+24) (14+32)   31 46
```

Matrices do not have to be the same dimensions. They can be multiplied as long as:

`An*x , Bx*m`

where `num of columns for matrix A` = `num of rows for matrix B`. 

The result is a matrix with `n` rows and `m` cols.

```
A = 1 2 3 B = 4  A*B = 1*4+2*5+3*6 = 4+10+18 = 32 <- 1x1 matrix
              5
              6
```

Above, A is a `1x3` matrix, and B is a `3x1` matrix and their result is a `1x1` matrix.

### Idendity Matrix

An <mark>idendity matrix</mark> `I` is a matrix where if it is multiplied with another matrix `A`:

`I*A = A*I = A`

Examples of Identity matrices:

```
1 0   1 0 0   1 0 0 0
0 1   0 1 0   0 1 0 0
      0 0 1   0 0 1 0
              0 0 0 1
```

### Inverse Matrix

An "inverse" of `A`, let's call it `A'` is a matrix such that multiplying it with `A` results in the identity matrix `I`:

`A*A' = A'*A = I`

```  
A = a b   A' = (1 / (ad - bc)) *  d -b  =  1/|A| * adj(A)
    c d                          -c  a              
```

`|A|` is called the <mark>determinant of A</mark> and the matrix it is being multiplied with is called the <mark>adjugate of A</mark> or `adj(A)`

What how to invert a 3x3 matrix on [Khan Academy Youtube](https://www.youtube.com/watch?v=S4n-tQZnU6o&t=22s).

