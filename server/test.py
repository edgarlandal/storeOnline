from config import me


def read():
    print(me["name"])


def modify():
    me["age"] = 98
    print(me)


def create():
    me["preferred_color"] = "blue"
    print(me)
