from flask import Flask
from config import me
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
    all_cats = ["fruits", "vegetables", "dairy & eggs"]
    return json.dumps(all_cats)


# start the server
app.run(debug=True)
