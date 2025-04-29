from AnalizarImagen import analizarImagen
from bdConnection.bdConnect import add_image, app

if __name__ == "__main__":
    #resultadosAnalisis = analizarImagen("imgs/Marquesina2.jpg")
    #primerResultado = resultadosAnalisis[1]
    #print(resultadosAnalisis)
    texto = "hola"
    with app.app_context():
        add_image(texto)
        app.run(host='192.168.1.61', port=3000, debug=True)