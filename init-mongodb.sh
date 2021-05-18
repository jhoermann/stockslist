mongo <<EOF
    var rootUser = '$MONGO_INITDB_ROOT_USERNAME';
    var rootPassword = '$MONGO_INITDB_ROOT_PASSWORD';
    var user = '$MONGO_USERNAME';
    var password = '$MONGO_PASSWORD';

    var admin = db.getSiblingDB('admin');
    admin.auth(rootUser, rootPassword);

    use $MONGO_INITDB_DATABASE
    db.createUser({user: user, pwd: password, roles: ["readWrite"]});
    
    use $MONGO_DATABASE_TEST
    db.createUser({user: user, pwd: password, roles: ["readWrite"]});
EOF
