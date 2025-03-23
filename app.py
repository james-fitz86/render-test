from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/banana")
def banana():
    return render_template("banana.html")


@app.route("/brownie")
def brownie():
    return render_template("brownie.html")


@app.route("/cheesecake")
def cheesecake():
    return render_template("cheesecake.html")


@app.route("/chocolate")
def chocolate():
    return render_template("chocolate.html")

if __name__ == "__main__":
    app.run(debug=True, port=8080)
