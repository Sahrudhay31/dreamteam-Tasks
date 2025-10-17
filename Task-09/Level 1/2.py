# Odd or Even

def odd_or_Even(a):
    a = abs(a)
    if a % 2 == 0:
        return 0
    else:
        return 1
    
def odd_or_Even_positive_even():
    assert odd_or_Even(12) == 0

def odd_or_Even_negative_even():
    assert odd_or_Even(-10) == 0

def odd_or_Even_positive_odd():
    assert odd_or_Even(7) == 1

def odd_or_Even_negative_add():
    assert odd_or_Even(-17) == 1

def odd_or_Even_zero():
    assert odd_or_Even(0) == 0
print("All tests passed!")
