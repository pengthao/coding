
create table users (
	id serial primary key,
	username varchar(25),
	password varchar(50),
	email varchar(255),
	profile_pic_url varchar(255)
);

create table recipes (
	id serial primary key,
	user_id integer REFERENCES users(id),
	title varchar(255),
	is_public boolean,
	instructions text
);

create table ingredients (
	id serial primary key,
	name varchar(255),
	type varchar(255)
);

create table recipe_ingredients (
	id serial primary key,
	recipe_id integer REFERENCES recipes(id),
	ingredient_id integer REFERENCES ingredients(id),
	quantity integer
);

create table stores (
	id serial primary key,
	store_name varchar(255),
	ingredient_id integer REFERENCES ingredients(id)
);

create table shopping_list (
	id serial primary key,
	name integer
);

create table user_shopping_list (
	eventID serial primary key,
	shopping_list_id integer REFERENCES shopping_list(id),
	user_id integer REFERENCES users(id),
	item_id integer REFERENCES ingredients(id),
	quantity integer,
	unit varchar(255),
	is_bought boolean
);

create table fridge (
	id serial primary key,
	name varchar(255)
);

create table favorite_recipes (
	id serial primary key,
	user_id integer REFERENCES users(id),
	recipe_id integer REFERENCES recipes(id),
	rank integer
);

create table cuisinetypes (
	id serial primary key,
	type varchar(255)
);

create table user_fridge (
	id serial primary key,
	user_id integer REFERENCES users(id),
	fridge_id integer REFERENCES fridge(id),
	ingredient_id integer REFERENCES ingredients(id),
	quantity integer,
	unit varchar(255),
	in_fridge boolean
);

create table favorite_cuisines (
	id serial primary key,
	user_id integer REFERENCES users(id),
	cusine_id integer REFERENCES cuisinetypes(id),
	rank integer
)
