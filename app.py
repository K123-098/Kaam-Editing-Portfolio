from flask import Flask, render_template_string
import base64
app = Flask(__name__)

def decode_content(encoded_str):
    return base64.b64decode(encoded_str).decode('utf-8')

@app.route('/')
def index():
    with open('encoded_content.txt', 'r') as file:
        encoded_content = file.read().strip()
    decoded_content = decode_content(encoded_content)
    return render_template_string(decoded_content)

if __name__ == '__main__':
    app.run(debug=True)
