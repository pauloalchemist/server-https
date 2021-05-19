read -p "Insira o nome: " name
read -p "Insira o e-mail: " email

curl -kX POST -d '{ "name": "'"${name}"'", "email": "'"${email}"'" }' \
        -H "Content-Type: application/json" \
        https://localhost:8080/createuser
