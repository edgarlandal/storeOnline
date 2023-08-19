from flask import Flask

app = Flask("server")

@app .get("/")
def home():
    return "Hello world"

@app.get("/test")
def test():
    return "This is a test page"

app.run(debug = True)