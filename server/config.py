import pymongo
import certifi

me = {
    "name": "Edgar",
    "last_name": "Landa",
    "age": 37,
    "hobbies": [],
    "addres": {
        "street": "Real",
        "city": "Tijuana",
        "zip": 22236,
        "country": "mexico",
    },
}


# data base configuration

con_str = "mongodb+srv://mikeydrako:9q5WMERVY5bIBJol@cluster0.09dmtz5.mongodb.net/?retryWrites=true&w=majority"

client = pymongo.MongoClient(con_str, tlsCAFile=certifi.where())

db = client.get_database("organika")
