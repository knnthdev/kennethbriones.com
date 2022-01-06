from flask import Flask, render_template, url_for, jsonify, request

app = Flask(__name__)


@app.route("/")
def home():
    return render_template('home.html')


@app.route("/About")
def about():
    return render_template("about.html")

 
if __name__ == "__main__":
    print("the program is already")
    app.run()              
 