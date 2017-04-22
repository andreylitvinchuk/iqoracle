import requests

link = "http://tsw.ru.forexprostools.com/api.php?action=refresher&pairs=1691&timeframe=10"
f = requests.get(link)

print f.text
