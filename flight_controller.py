from flask import Blueprint, jsonify
from app.models.flight import get_flights

bp = Blueprint('flights', __name__, url_prefix='/api/flights')

@bp.route('/', methods=['GET'])
def fetch_flights():
    flights = get_flights()
    return jsonify(flights)
