FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
ADD requirements.txt /app/
RUN pip install -r requirements.txt
ADD . .
CMD ./utils/wait-for-it.sh db:5432 && python3 manage.py migrate && python3 manage.py runserver 0.0.0.0:8000