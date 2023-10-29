
users {
	id integer pk increments
	username varchar(25)
	password varchar(50)
	email varchar(255)
	profile_pic_url varchar(255)
	favorite_recipes integer[]
	favorite_cuisine integer[]
    allergies integer[]
}

recipes {
	id integer pk increments
	user_id integer > users.id
	title varchar(255)
	is_public boolean
	instructions text
}

ingredients {
	id integer pk increments
	name varchar(255)
	type varchar(255)
}

recipe_ingredients {
	id integer pk increments
	recipe_id integer > recipes.id
	ingredient_id integer > ingredients.id
	quantity integer
}

grocery_list {
	id integer pk increments
	user_id integer > users.id
	item_name integer > ingredients.id
	quantity integer > undefined.undefined
	unit varchar(255)
}

stores {
	id integer pk increments
	store_name varchar(255)
}

shopping_list {
	id integer pk increments
	user_id integer > users.id
	item_name varchar(255)
	quantity integer
	unit varchar(255)
	is_bought boolean
	store_id integer > stores.id
}

fridge {
	id integer pk increments
	user_id integer > users.id
	item_name varchar(255)
	quantity integer
	unit varchar
	expiration_date date
}

