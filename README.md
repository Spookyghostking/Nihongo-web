# Nihongo-web
Quiz application for Japanese words

### Installation
Python version is 3.7, but should work with newer versions up to 3.10 definitely,
and maybe with newer versions too.

Dependencies:
- Django (use `pip install django` - Django web framework)
- openpyxl (use `pip install openpyxl` - Python Excel spreadsheet reader)

### Running the server
To run the server, navigate to .\DjangoMan\ and run `manage.py runserver`

### Using the app
Once the server is running, you can open localhost:8000/nihongo/ in your browser
and start the quiz (probably). The words in the Excel spreadsheet are ordered by
how often they appear in the language, and when starting the quiz, you are
allowed to pick which portion of the words you want to include in the quiz, 1
being the most common word, and the words become more uncommon the higher you go.

You can also mess with the excel spreadsheet as you please. ("Nihongo .xlsx")
