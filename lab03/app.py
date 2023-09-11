from flask import Flask, request

app = Flask('lab01')

def valid_input(params: list, req):
	print(requiers)
	valid_params = []
	for param in params:
		user_param = req.args.get(param)
		print(user_param)
		if (type(user_param) != None):
			valid_params.add(user_param)
		else:
			raise Exception(f'Arg {param} is requires')
	return valid_params

@app.route('/test')
def test_form():
	#param: str = request.args
	try:
		[name] = valid_input(['name'],request)
		return f'Hello, {name}'
	except:
		return '400: Bad Request'

@app.route('/lab03', methods=['GET','POST'])
def lab03_form():
	if request.method == 'GET':
		return lab03_get()
	elif request.method == 'POST':
		return lab03_post()
	else:
		return 'unknown method'

def lab03_get():
	param = request.args.get('param')
	return f'Hello, {param}!'

def lab03_post():
	param = request.form['param']
	return f'Hello, {param}!'

@app.route('/add', methods=['GET'])
def add_get():
	try:
		a = int(request.args.get('a'))
		b = int(request.args.get('b'))
		return f'{a}+{b}={a+b}'
	except:
		return 'Bad Request'
