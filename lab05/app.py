from flask import Flask, request, render_template
from datetime import datetime

app = Flask('lab05')

my_items = []

@app.route('/hello', methods=["GET"])
def hello():
    name = request.args.get('name')
    t = datetime.now()
    time = t.strftime('%H:%M:%S')
    return render_template('hello.html', name=name, time=time)

@app.route('/my_list', methods=["GET", "POST"])
def my_list():
    if request.method == 'GET':
        return my_list_get()
    elif request.method == 'POST':
        return my_list_post()
    else:
        return '404: NOT FOUND'

def my_list_post():
    el = request.form['content']
    my_items.append(el)
    return my_list_get()

def my_list_get():
    return render_template('my_list.html', items=my_items)
