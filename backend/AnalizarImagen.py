from Imagen import Imagen
from Monedas import Monedas
import os

def setEnvironmentKeys():
    os.system('setx VISION_KEY CuZdK5euE5x8MXeF9XQoKuR1JjlpaIghbzsr3IDd63jJpny9afgFJQQJ99BCAC5RqLJXJ3w3AAAFACOGs6lJ')
    os.system('setx VISION_ENDPOINT https://imganalyzer.cognitiveservices.azure.com/')

#Funcion que analiza la imagen

def analizarImagen(url):
    import os

    from azure.ai.vision.imageanalysis import ImageAnalysisClient
    from azure.ai.vision.imageanalysis.models import VisualFeatures
    from azure.core.credentials import AzureKeyCredential

    # Inicia el login
    import sys
    import logging

    # Consigue el logger
    # Librerias de 'azure.core` y `azure.ai.vision.imageanalysis'.
    logger = logging.getLogger("azure")

    # Set the desired logging level. logging.INFO or logging.DEBUG are good options.
    logger.setLevel(logging.INFO)

    # Direct logging output to stdout (the default):
    handler = logging.StreamHandler(stream=sys.stdout)
    # Or direct logging output to a file:
    # handler = logging.FileHandler(filename = 'sample.log')
    logger.addHandler(handler)

    # Optional: change the default logging format. Here we add a timestamp.
    formatter = logging.Formatter("%(asctime)s:%(levelname)s:%(name)s:%(message)s")
    handler.setFormatter(formatter)
    # [END logging]

    #Seteo de las variables de sesion, si falla printea que falta alguna llave
    try:
        endpoint = os.environ["VISION_ENDPOINT"]
        key = os.environ["VISION_KEY"]
    except KeyError:
        print("Missing environment variable 'VISION_ENDPOINT' or 'VISION_KEY'")
        print("Set them before running this sample.")
        exit()

    # Esta funcion carga la imagen y lo lee en bytes
    with open(url, "rb") as f:
        image_data = f.read()

    # Crea un cliente de analizador de imagenes
    client = ImageAnalysisClient(
        endpoint=endpoint,
        credential=AzureKeyCredential(key),
    )

    # Analiza todos los tags de la imagen.
    result = client.analyze(
        image_data=image_data,
        visual_features=[
            VisualFeatures.TAGS,
            VisualFeatures.CAPTION
        ]
    )

    tagsEnLaImagen = []
    if result.tags is not None:
        for tag in result.tags.list:
            tagsEnLaImagen.append(tag.name)
       #     tagsEnLaImagen.append(tag.confidence)

    #Almaceno los resultados en el array tags de imagen y lo muestro
    #print("Objetos de la imagen y su nivel de confianza de exactitud:")
    #print(tagsEnLaImagen)
    #print("Analisis de la imagen de forma general:")
    #print(result.caption)
    os.system('python bdConnection/bdConnect.py')
    return tagsEnLaImagen

#Funcion que ejecuta el programa principal
def guardarImagen():
    objeto = analizarImagen("imgs/Marquesina2.jpg")

    for objeto in objeto:
        print(objeto)
