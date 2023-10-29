
users {
	id integer pk increments
	username varchar(25)
	password varchar(50)
	email varchar(255)
	profile_pic_url varchar(255)
}

recipes {
	id integer pk increments
	user_id integer > users.id
	title varchar(255)
	is_public boolean
	instructions text
	cuisine_type integer *> cuisinetypes.type
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

stores {
	id integer pk increments
	store_name varchar(255)
}

shopping_list {
	id integer pk increments
	user_id integer > users.id
	item_id varchar(255) > ingredients.id
	quantity integer
	unit varchar(255)
	is_bought boolean
	store_id integer > stores.id
}

fridge {
	id integer pk increments
	user_id integer > users.id
	item_id varchar(255) > ingredients.id
	quantity integer
	unit varchar
	expiration_date date
	in_fridge boolean
}

favorites {
	id integer pk increments
	user_id integer > users.id
	recipe_id integer > recipes.id
}

cuisinetypes {
	id integer pk increments
	user_id integer > users.id
	type varchar(255)
}

user_preferences {
	id integer pk increments
	user_id integer *> users.id
	preference_type varchar(255)
	preference_value varchar(255)
}

