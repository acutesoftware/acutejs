import os 
import json
from flask import Flask
from flask import render_template

app = Flask(__name__)

app.secret_key = "123456gjhrthdehfhjhknlkbYUlgfkFdlkf"

SERVER_VERSION = "DEV"
#SERVER_VERSION = "PROD"

def start_server():
    if SERVER_VERSION == "DEV":
        print("WARNING - DEBUG MODE ACTIVE")
        app.debug = True	# TURN THIS OFF IN PRODUCTION
        app.run(threaded=True, host='0.0.0.0', port=5200)
    else:
        app.run(threaded=True, host='0.0.0.0', port=5200)  # FOR PROD


@app.errorhandler(404)
def page_not_found(e):
    return 'cant find that page sorry'


@app.route('/', methods=['GET'])
def home():
    return render_template('home.html')

@app.route('/about', methods=['GET'])
def about():
    return render_template('home.html')

@app.route('/posts', methods=['GET'])
def posts():

    res = [
    {"id":"1","createdAt":"2018-10-04T12:51:56.032Z","name":"Matilda Kessler","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/superoutman/128.jpg","title":"Concrete firewall Vision-oriented","content":"navigate"},
    {"id":"2","createdAt":"2018-10-04T05:27:22.341Z","name":"Alexie Lindgren","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/petrangr/128.jpg","title":"Refined Wooden Shirt programming Rustic","content":"Credit Card Account"},
    ]
    print('sending 2 posts')
    return json.dumps(res) # 

@app.route('/post/<id>', methods=['GET', 'POST'])
def show_post(id):
    res = {
        "id":id,
        "title":"This is post number " + id,
        "content":"This is the content.",
        "name":"written by No one"
    }
    return json.dumps(res)

@app.route('/register', methods=['GET', 'POST'])
def register(id):
    return render_template('home.html')


if __name__ == '__main__':
    start_server()


