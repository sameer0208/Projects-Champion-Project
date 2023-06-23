from flask import Flask, render_template, request, redirect, url_for
import os
from pymongo import MongoClient
app = Flask(__name__)

connection_string = "mongodb+srv://2110030317:sameer_k_0208@cluster0.gxzf2vn.mongodb.net/projectbuddy?retryWrites=true&w=majority"
client = MongoClient(connection_string)
db = client.projectbuddy
collection1 = db.students
collection2 = db.developers

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/student', methods=['GET', 'POST'])
def student():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        contact_no = request.form.get('contact_no')
        whatsapp_no = request.form.get('whatsapp_no')
        gender = request.form.get('gender')
        qualification = request.form.get('qualification')
        project_title = request.form.get('project_title')
        project_description = request.form.get('project_description')
        skills = request.form.getlist('skills')
        duration = request.form.get('duration')
        group_members = request.form.get('group_members')
        file = request.files['file']
        accept_terms = request.form.get('accept_terms')
        # Save the image file
        file_path = os.path.join(app.root_path, 'static\student_files', file.filename)
        file.save(file_path)
        # Save the data to MongoDB
        project_data = {
            'name': name,
            'email': email,
            'contact_no': contact_no,
            'whatsapp_no': whatsapp_no,
            'gender': gender,
            'qualification': qualification,
            'project_title': project_title,
            'project_description': project_description,
            'skills': skills,
            'duration': duration,
            'group_members': group_members,
            'file': file.filename if file else None,
            'accept_terms': accept_terms == 'on',
            'completed':False
        }
        collection1.insert_one(project_data)

        return redirect(url_for('success_stu'))
    return render_template('student.html')

@app.route('/developer', methods=['GET', 'POST'])
def developer():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        contact_no = request.form.get('contact_no')
        whatsapp_no = request.form.get('whatsapp_no')
        gender = request.form.get('gender')
        qualification = request.form.get('qualification')
        skills = request.form.getlist('skills')
        experience = request.form.get('experience')
        skill_description = request.form.get('skill_description')
        file = request.files['file']
        accept_terms = request.form.get('accept_terms')
        # Save the image file
        file_path = os.path.join(app.root_path, 'static\developer_files', file.filename)
        file.save(file_path)
        # Save the file if provided
        if file:
            file.save(file.filename)

        # Prepare the document to be inserted in MongoDB
        document = {
            'name': name,
            'email': email,
            'contact_no': contact_no,
            'whatsapp_no': whatsapp_no,
            'gender': gender,
            'qualification': qualification,
            'skills': skills,
            'experience': experience,
            'skill_description': skill_description,
            'file_name': file.filename if file else None,
            'accept_terms': accept_terms == 'on'
        }

        # Insert the document into MongoDB
        collection2.insert_one(document)
        return redirect(url_for('success_dev'))

    return render_template('developer.html')



@app.route('/success_stu/')
def success_stu():
    return render_template('success_stu.html')

@app.route('/success_dev/')
def success_dev():
    return render_template('success_dev.html')

@app.route('/student_tandc/')
def student_tandc():
    return render_template('stu_tandc.html')

@app.route('/dev_tandc/')
def dev_tandc():
    return render_template('dev_tandc.html')

@app.route('/services/')
def services():
    return render_template('services.html')

if __name__ == '__main__':
    app.run(debug=True)
