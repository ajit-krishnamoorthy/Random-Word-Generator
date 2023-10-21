import random
import urllib.request

word_url = "http://svnweb.freebsd.org/csrg/share/dict/words?view=co&content-type=text/plain"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64)'}
req = urllib.request.Request(word_url, headers=headers)
response = response = urllib.request.urlopen(req)
long_txt = response.read().decode()
words = long_txt.splitlines()

newWord = random.choice(words)
print(newWord)