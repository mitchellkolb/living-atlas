"""
account
    profile account
    upload account
    profile cards           --Adjust query to be post referenced

"""

from fastapi import APIRouter, Form
from database import conn, cur

import os
import hashlib


account_router = APIRouter()




#This takes the users email and password and then returns the account information to show for the profile page
@account_router.get("/profileAccount")
def profileAccount(email: str, password: str):
    #Get the salt from the db
    cur.execute(f"SELECT salt FROM users WHERE email = '{email}'")
    rows = cur.fetchall()
    if rows != []:
        #Convert the given password and the pepper (which is hardcoded) into bytes, concatenate the password, salt, and pepper together
        #Hash all of that so that it matches the password stored in the db
        password = hashlib.sha256(bytes(password, 'utf-8') + rows[0][0] + bytes("xe5Dx93xefx16x9ax12wy", 'utf-8')).hexdigest()
        #Retrieve the information after the user has been authenticated
        cur.execute(f"SELECT username, email FROM users WHERE email = '{email}' AND hashedpassword = '{password}'")
        rows = cur.fetchall()
        return {"Account Information": rows}




@account_router.post("/uploadAccount")
async def make_account(
    name: str = Form(None),
    email: str = Form(None),
    password: str = Form(None)
):
    if(name is not None and email is not None and password is not None):
        cur.execute(f"SELECT userid FROM users where email = '{email}'")
        rows = cur.fetchall()
        if(rows == []):
            cur.execute(f"SELECT COUNT(userid) FROM users")
            rows = cur.fetchall()
            userid = rows[0][0] + 1
            salt = os.urandom(32)
            hashpass = hashlib.sha256(bytes(password, 'utf-8') + salt + bytes("xe5Dx93xefx16x9ax12wy", 'utf-8')).hexdigest()
            #print(f"({userid}, '{name}', '{email}', '{hashpass}', {salt}),")
            cur.execute("INSERT INTO users (userid, username, hashedpassword, email, salt) VALUES (%s, %s, %s, %s, %s)", ((userid, name, hashpass, email, salt)))
            conn.commit()
            return {"success": True, "message": "New account added successfully"}
        else:
            return{"success": False, "message": "Email must be unique"}
    else:
        return{"success": False, "message": "All fields must be filled in"}





@account_router.get("/profileCards")
def profileCards(username: str):
    cur.execute(f"""
            SELECT Users.Username, Users.Email, Cards.title, Categories.CategoryLabel, Cards.dateposted, Cards.description, Cards.organization, Cards.funding, Cards.link, STRING_AGG(Tags.TagLabel, ', ') AS TagLabels, Cards.latitude, Cards.longitude, Files.FileExtension, Files.FileID
            FROM Cards
            INNER JOIN Categories
            ON Cards.CategoryID = Categories.CategoryID
            LEFT JOIN Files
            ON Cards.CardID = Files.CardID
            LEFT JOIN CardTags
            ON Cards.CardID = CardTags.CardID
            LEFT JOIN Tags
            ON CardTags.TagID = Tags.TagID
            INNER JOIN Users
            ON Cards.UserID = Users.UserID
            WHERE Users.Username = '{username}'
            GROUP BY Cards.CardID, Categories.CategoryLabel, Files.FileExtension, Files.FileID, Users.Username, Users.Email
            ORDER BY Cards.CardID DESC;
            
            """)
            #LIMIT 6;

    rows = cur.fetchall()
    columns = ["username", "email", "title", "category", "date", "description", "org", "funding", "link", "tags", "latitude", "longitude", "fileEXT", "fileID"]
    data = [dict(zip(columns, row)) for row in rows]
    return {"data": data}


