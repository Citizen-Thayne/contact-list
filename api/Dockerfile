FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app/
RUN pip install -r requirements.txt
COPY . .
CMD ./utils/wait-for-it.sh db:5432 && python3 manage.py migrate && python3 manage.py runserver 0.0.0.0:80