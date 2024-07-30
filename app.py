from flask import Flask
from app.controllers import flight_controller, user_controller

app = Flask(__name__)
app.register_blueprint(flight_controller.bp)
app.register_blueprint(user_controller.bp)

if __name__ == "__main__":
    app.run(debug=True)
