
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
	ingredient_id integer *> ingredients.id
}

user_shopping_list {
	eventID integer pk increments
	shopping_list_id integer > shopping_list.id
	user_id integer > users.id
	item_id varchar(255) *> ingredients.id
	quantity integer
	unit varchar(255)
	is_bought boolean
}

fridge {
	id integer pk increments
	name varchar(255)
}

favorite_recipes {
	id integer pk increments
	user_id integer *> users.id
	recipe_id integer *> recipes.id
	rank integer
}

cuisinetypes {
	id integer pk increments
	type varchar(255)
}

user_fridge {
	id integer pk increments
	user_id integer > users.id
	fridge_id integer > fridge.id
	ingredient_id integer *> ingredients.id
	quantity integer
	unit varchar(255)
	in_fridge boolean
}

favorite_cuisines {
	id integer pk increments
	user_id integer *> users.id
	cusine_id integer *> cuisinetypes.id
	rank integer
}

shopping_list {
	id integer pk increments
	name integer
}

