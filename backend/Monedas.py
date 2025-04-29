class Monedas:
    def __new__(cls, tipo, valor):
        instance = super(Monedas, cls).__new__(cls)
        return instance
    # Constructor method called when creating an object
    def __init__(self, tipo, valor):
        self.tipo = tipo
        self.valor = valor
    # Method defined within the class
    def get_tipo(self):
        return self.tipo

    def get_valor(self):
        return self.valor

    def set_tipo(self, tipo):
        self.tipo = tipo

    def set_valor(self, valor):
        self.valor = valor


