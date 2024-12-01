from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load model and vectorizer
model = joblib.load("spam_classifier_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

@app.route('/check_spam', methods=['POST'])
def check_spam():
    data = request.json
    email_text = data.get("text", "")
    
    # Process the text with the vectorizer
    features = vectorizer.transform([email_text])
    
    # Make prediction
    prediction = model.predict(features)
    
    # Return result
    return jsonify({"spam": bool(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
