
pets {
	id integer pk increments
	name varchar(255)
	species varchar(255)
	breed varchar(255)
	age float(4)
	gender varchar(255)
	weight_lbs integer
	description text
	photo_url string
	fee integer
	arrival_date integer
	medical_history text
	available_for_adoption boolean
	shelter_id integer > shelters.id
	adopter_id integer *> users.id
}

species {
	id integer pk increments
	species_name varchar(255)
}

breed {
	id integer pk increments
	species_id integer > species.id
	breed_name varchar(255)
}

users {
	id integer pk increments
	username varchar(255)
	password varchar(30)
	email varchar(255)
	phone_number varchar(255)
	user_type float(255)
}

shelters {
	id integer pk increments
	name varchar(255)
	address text
	contact_name varchar(255)
	contact_phone varchar(16)
	contact_email varchar(255)
}

adoptions {
	id integer pk increments
	pet_id integer > pets.id
	adopter_id integer > users.id
	adoption_date date
}

vaccinations {
	id integer pk increments
	pet_id integer *> pets.id
	vaccine_name integer
	vaccination_date date
}

medical_records {
	id integer pk increments
	pet_id integer > pets.id
	description text
	record_date date
}

