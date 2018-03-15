# Contact List
Simple contact list app built using Django, Postgres, Nuxt, and Docker
Check it out here: http://contacts-external-1n24b9zddansq-1247544336.us-east-1.elb.amazonaws.com/

## Running it yourself
### Docker
A `docker-compose.yml` file is included to easily build and run the full app in docker.
```
git clone https://github.com/Citizen-Thayne/contact-list
cd contact-list
docker-compose up
```

#### View App
Navigate to http://localhost:8001 

#### Use REST API
`curl http://localhost:8000/contacts/`

