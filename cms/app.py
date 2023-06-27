from flask import Flask, render_template, request, redirect
import cms.files

app = Flask(__name__)

@app.route('/')
def index():
    files = cms.files.get_files()
    return render_template('home.html', files=files)

@app.route('/file/<path:path>')
def page(path):
    path = path.replace('', '')
    content = cms.files.get_file_content(path)
    contents = content.split('---')
    content = contents[2]
    attributes = cms.files.get_file_attributes(path)
    return render_template('page.html', content=content, attributes=attributes)

app.run(debug=True)