from flask import Blueprint, request, jsonify
from app.models.user import subscribe_user

bp = Blueprint('users', __name__, url_prefix='/api/users')

@bp.route('/subscribe', methods=['POST'])
def subscribe():
    data = request.json
    subscribe_user(data)
    return jsonify({"message": "Subscribed successfully"}), 201
