FROM python:3.8-slim-buster

WORKDIR ./app

ADD app.py ./

RUN pip3 install pyppeteer pymongo

CMD ["python3","app.py"]
