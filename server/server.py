from flask import Flask, request, abort
from config import me, db
import json
import bson

from flask_cors import CORS

app = Flask("server")

CORS(app=app)


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


@app.get("/api/products/price/<price>")
def get_by_prices(price):
    products = []
    cursor = db.products.find({"price": float(price)})

    for prod in cursor:
        products.append(fix_id(prod))

    return json.dumps(products)


@app.get("/api/products/title/<title>")
def get_by_title(title):
    products = []
    cursor = db.products.find({"title": title})

    for prod in cursor:
        products.append(fix_id(prod))

    return json.dumps(products)


@app.get("/api/products/id/<id>")
def get_produtcs_by_id(id):
    if not bson.ObjectId.is_valid(id):
        return abort(
            400,
            "Invalid ID",
        )

    db_id = bson.ObjectId(id)
    product = db.products.find_one({"_id": db_id})
    if not product:
        return abort(
            404,
            "Product not found",
        )

    return json.dumps(fix_id(product))


@app.get("/api/products/count")
def get_num_products():
    products = []
    cursor = db.products.find({})
    i = 0
    for prod in cursor:
        products.append(fix_id(prod))
        i += 1

    return json.dumps(i)


@app.get("/api/reports/total")
def report_total():
    total = 0
    cursor = db.products.find({})

    for prod in cursor:
        total += prod["prices"]

    return json.dumps(f"The total value is ${total}")


@app.get("/api/coupons")
def get_coupons():
    coupons = []
    cursor = db.coupons.find({})

    for c in cursor:
        coupons.append(fix_id(c))
    return json.dumps(coupons)


@app.post("/api/coupons")
def set_coupons():
    coupon = request.get_json()

    if not "code" in coupon:
        return abort(400, "Code is required")

    if not "discount" in coupon:
        return abort(400, "Discount is required")

    if coupon["discount"] > 35:
        return abort(400, "Discount is not valid")

    db.coupons.insert_one(coupon)
    return json.dumps(fix_id(coupon))


@app.get("/api/coupons/<code>")
def get_coupon_code(code):
    coupon = db.coupons.find_one({"code": code})
    if not coupon:
        return abort(
            404,
            "Coupon not found",
        )

    return json.dumps(fix_id(coupon))


@app.get("/api/coupons/id/<id>")
def get_coupon_by_id(id):
    if not bson.ObjectId.is_valid(id):
        return abort(
            400,
            "Invalid ID",
        )

    db_id = bson.ObjectId(id)
    coupon = db.coupons.find_one({"_id": db_id})
    if not coupon:
        return abort(
            404,
            "Coupon not found",
        )

    return json.dumps(fix_id(coupon))


# start the server
app.run(debug=True)
