class Imagen:
    def __new__(cls, url):
        instance = super(Imagen, cls).__new__(cls)
        return instance
    # Constructor method called when creating an object
    def __init__(self, url):
        self.url = url
    # Method defined within the class
    def get_url(self):
        return self.url

    def set_valor(self, url):
        self.url = url