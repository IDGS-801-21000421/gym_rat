from flask import Flask, render_template # type: ignore

app = Flask(__name__)

# Ruta principal para cargar la plantilla index.html
@app.route('/')
def index():
    return render_template('index.html')

# Ruta para restablecer contraseña
@app.route('/reset-password')
def reset_password():
    return render_template('rest_password.html')

# Ruta para inicio de usuarios normales
@app.route('/inicio')
def inicio():
    return render_template('inicio.html')

# Verifica que el script se está ejecutando directamente
if __name__ == '__main__':
    app.run(debug=True, port=8088)

