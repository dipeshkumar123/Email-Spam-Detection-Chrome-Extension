import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score
import joblib

# Load dataset (update with the correct CSV file path)
data = pd.read_csv("emails.csv")  # Replace with your actual dataset path

# Preprocessing
X = data['text']
y = data['spam']
vectorizer = TfidfVectorizer(stop_words='english')
X_transformed = vectorizer.fit_transform(X)

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X_transformed, y, test_size=0.2, random_state=42)

# Train model
model = MultinomialNB()
model.fit(X_train, y_train)

# Evaluate
predictions = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, predictions)}")

# Save model and vectorizer
joblib.dump(model, "spam_classifier_model.pkl")
joblib.dump(vectorizer, "vectorizer.pkl")