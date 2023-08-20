from flask import Flask, request, abort
from config import me, db
import json

app = Flask("server")


@app.get("/")
def home():
    return "Hello world"


@app.get("/test")
def test():
    return "This is a test page"


@app.get("/about")
def about_me():
    return "Edgar Landa"


"""API - Products """
""" JSON"""


@app.get("/api/about")
def about_data():
    return json.dumps(me)


@app.get("/api/about/developer")
def get_name():
    return json.dumps(me["name"] + " " + me["last_name"])


@app.get("/api/categories")
def categories():
    all_cats = []
    cursor = db.products.find({})

    for product in cursor:
        category = product["category"]
        if category not in all_cats:
            all_cats.append(category)
    return json.dumps(all_cats)


def fix_id(record):
    record["_id"] = str(record["_id"])
    return record


@app.get("/api/products")
def get_products():
    products = []
    cursor = db.products.find({})

    for product in cursor:
        products.append(fix_id(product))
    return json.dumps(products)


@app.post("/api/products")
def save_products():
    products = request.get_json()
    db.products.insert_one(products)
    return json.dumps(fix_id(products))


@app.get("/api/products/category/<cat>")
def get_by_category(cat):
    products = []
    cursor = db.products.find({"category": cat})

    for prod in cursor:
        products.append(fix_id(prod))

    return json.dumps(products)


@app.get("/api/products/count")
def get_num_products():
    products = []
    cursor = db.products.find({})
    i = 0
    for prod in cursor:
        products.append(fix_id(prod))
        i += 1

    return json.dumps(i)


# start the server
app.run(debug=True)
