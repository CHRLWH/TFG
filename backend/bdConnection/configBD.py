import os

base_dir = os.path.dirname(os.path.abspath(__file__))

cadena_conexion = 'mysql+mysqlconnector://cimpa_master:1234Qwerty@localhost:3306/cimpa_v2'

host = 'localhost'
database = ''
user = ''
password = ''
port = ''

ruta_procesado = os.path.join(base_dir, 'data', 'processed')

ruta_dataset_unico = os.path.join(base_dir, 'data')