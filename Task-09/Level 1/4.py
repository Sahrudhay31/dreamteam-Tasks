# Dividing two numbers

def division(a,b):
    if b == 0:
        raise ZeroDivisionError("b cannot be zero")
    return a / b

def test_division_b_not_0():
    assert division(50,25) == 2

def test_division_b_0():
    with pytest.raises(ZeroDivisionError):
        division(2,0)