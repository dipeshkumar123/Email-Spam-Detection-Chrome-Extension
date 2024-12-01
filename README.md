# Spam Email Classification and Browser Extension

This project is a comprehensive solution to detect and classify spam emails. It combines a machine learning backend for spam detection with a browser extension to provide real-time classification of email content. 

## Features

- **Machine Learning Backend**: Uses a trained model to classify emails as spam or non-spam.
- **Browser Extension**: A frontend browser plugin that interacts with the backend to classify emails on the fly.
- **Real-time Detection**: Classify emails directly from the user's browser interface.
- **Custom Dataset Support**: Allows training the model with custom email datasets.
- **Ease of Use**: Simple and lightweight solution.

---

## Project Structure

### Backend
The backend contains the logic for training and deploying the spam classifier model.
- `app.py`: Flask application to serve the model and handle API requests.
- `emails.csv`: Dataset used for training the model.
- `requirements.txt`: Python dependencies for the backend.
- `spam_classifier_model.pkl`: Trained machine learning model.
- `train_model.py`: Script for training the spam classifier.
- `vectorizer.pkl`: Pretrained vectorizer for text preprocessing.

### Frontend
The frontend consists of a browser extension.
- `background.js`: Handles backend communication and extension logic.
- `content.js`: Injects content into the browser for real-time email classification.
- `icon.png`: Icon for the browser extension.
- `manifest.json`: Configuration file for the browser extension.
- `popup.css`: Styles for the popup UI.
- `popup.html`: HTML structure of the extension's popup.
- `popup.js`: JavaScript logic for the popup functionality.

---

## Prerequisites

- **Backend**:
  - Python 3.8 or higher
  - Pipenv or virtual environment setup
- **Frontend**:
  - A Chromium-based browser (e.g., Chrome, Edge, Brave)

---

## Installation and Usage

### Backend

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/dipeshkumar123/Email-Spam-Detection-Chrome-Extension.git
   cd Email-Spam-Detection-Chrome-Extension/backend
   ```

2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Server**:
   ```bash
   python app.py
   ```
   The backend will run on `http://127.0.0.1:5000/`.

4. **(Optional) Train the Model**:
   If you want to retrain the model, modify the `emails.csv` dataset and run:
   ```bash
   python train_model.py
   ```

### Frontend

1. Open your browser and navigate to the extensions page.
   - In Chrome, go to `chrome://extensions`.

2. Enable Developer Mode.

3. Click **Load unpacked** and select the `fronted` directory.

4. The extension icon will appear in your browser toolbar.

---

## API Endpoints

The backend exposes the following endpoints:

- **`POST /check_spam`**  
  Input: JSON object with the email text.  
  Output: Classification result (Spam/Not Spam).

Example:
```json
{
  "text": "Congratulations, you've won a free iPhone!"
}
```

Response:
```json
{
  "spam": "false"
}
```

---

## Technology Stack

- **Backend**:
  - Flask
  - Scikit-learn
  - Pandas

- **Frontend**:
  - HTML, CSS, JavaScript
  - Chrome Extension APIs

---

## Future Enhancements

- Support for multiple languages.
- Email classification using advanced transformer models (e.g., BERT).
- Integration with popular email services like Gmail or Outlook.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your fork and create a pull request.

---

## Contact

For any questions or issues, please contact:
- **Name**: Dipesh Kumar Panjiyar
- **Email**: panjiyardipesh123@gmail.com
- **GitHub**: https://github.com/dipeshkumar123
