from pprint import pprint



def find_next_empty(puzzle):
# finds the next row, col on the puzzle thats not filled yet (-1)
# return row, col tple (or (None, None) if there is none)
# 0-8 four our indicator


    for r in range(9):
        for c in range(9): # range beinf 0-8
            if puzzle[r][c] ==-1:
                return r, c
            
    return None, None # if no spaces in the puzzle are empty (-1)

def is_valid(puzzle, guess, row, col):
    #figures out whether the guess at the row/col of the puzzle is valid
    #return True if is valid, otherwise False

    row_vals = puzzle[row]
    if guess in row_vals:
        return False

    # now the column
    # col_vals = []
    # for i in range(9):
    #    col_vals.append(puzzle[i][col])
    col_vals = [puzzle[i][col] for i in range(9)]
    if guess in col_vals:
        return False

     # the square   
     # get where the 3x3 square starts
     # and iterate over the 3 value in the row/column
    row_start = (row // 3) * 3 # 1 //3 = 0, 5 // 3 = 1,....
    col_start = (col // 3) * 3

    for r in range(row_start, row_start + 3):
         for c in range(col_start, col_start + 3):
             if puzzle[r][c] == guess:
                 return False
    # if here, these checks pass
    return True

def solve_sudoku(puzzle):
    #the puzzle is a list of list. With each inner list being a row
    # return whether solution exists




    #step 1: choose somewhere on the puzzle to make a guess
    row, col = find_next_empty(puzzle)

    #step 1.1: if theres nowhere left, then were done because we onlt allowed valid inputs
    if row is None:
        return True

    #step 3: if there is a place to put a number, the make a guess between 1 and 9
    for guess in range(1, 10):
        #step 3.1: check if this is valid guess
        if is_valid(puzzle, guess, row, col):
            # step 3.2: if this is valid, then place that guess on the puzzle!
            puzzle[row][col] = guess
            # step 4: recurcively call our function 
            if solve_sudoku(puzzle):
                return True
            
        # step 5: if not valid OR if our guess does not solve the puzzle, then we need to 
        # backtrack and try a new number
        puzzle[row][col] = -1 #reset the guess

    # step 6: if none of the numbers that we try work, then this puzzle is UNSOLVABLE!!
    return False

if __name__ == '__main__':
    example_board = [
        [3, 9, -1,   -1, 5, -1,   -1, -1, -1],
        [-1, -1, -1,   2, -1, -1,   -1, -1, 5],
        [-1, -1, -1,   7, 1, 9,   -1, 8, -1],

        [-1, 5, -1,   -1, 6, 8,   -1, -1, -1],
        [2, -1, 6,   -1, -1, 3,   -1, -1, -1],
        [-1, -1, -1,   -1, -1, -1,   -1, -1, 4],

        [5, -1, -1,   -1, -1, -1,   -1, -1, -1],
        [6, 7, -1,   1, -1, 5,   -1, 4, -1],
        [1, -1, 9,   -1, -1, -1,   2, -1, -1]
    ]
    print(solve_sudoku(example_board))
    pprint(example_board)  