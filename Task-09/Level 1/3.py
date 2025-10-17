# Print first element of a list

def print_first_element(arr):
    if len(arr) == 0:
        return 0
    return arr[0]

def test_print_first_element_len_not_0():
    arr = [1,2,3]
    assert print_first_element(arr) == 1

def test_print_first_element_len_0():
    arr = []
    assert print_first_element(arr) == 0