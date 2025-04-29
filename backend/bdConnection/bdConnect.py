from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/flask'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)
class Images(db.Model):
    id = db.Column(db.Integer, primary_key= True)
    image = db.Column(db.String(100))
    
    def __init__(self, image):
        self.image = image


class ImagesSchema(ma.Schema):
    class Meta:
        fields = ('id', 'image')

images_schema = ImagesSchema()
images_schema = ImagesSchema(many=True)

@app.route('/get', methods = ['GET'])
def get_images():
    all_images = Images.query.all()
    results = images_schema.dump(all_images)
    return jsonify(results)
@app.route('/get/<id>/', methods = ['GET'])
def post_details(id):
    image = Images.query.get(id)
    return images_schema.jsonify(image)
@app.route('/add/<image>', methods = ['POST'])
def add_image(image):
    images = Images(image)
    db.session.add(images)
    db.session.commit()
    return images_schema.jsonify(images)
@app.route('/update/<id>/', methods = ['PUT'])
def update_image(id):
    article = Images.query.get(id)

    image = request.json['title']
    image.image = image

    db.session.commit()
    return images_schema.jsonify(image)

@app.route('/delete/<id>/', methods = ['DELETE'])
def delete(id):
    image = Images.query.get(id)
    db.session.delete(image)
    db.session.commit()

    return images_schema.jsonify(image)

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(host= '192.168.1.61',port=3000,debug=True)