CREATE TABLE public.users (
	id INTEGER NOT NULL,
	username CHARACTER VARYING(60) NOT NULL,
	email VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	cpf VARCHAR(11) NOT NULL,
	phone VARCHAR(20) NOT NULL,
	typeUser_id INTEGER,
	active BOOLEAN NOT NULL,
	created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW() NOT NULL,
	updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW() NOT NULL,
	PRIMARY KEY (id)	
);

CREATE SEQUENCE public.users_id_seq
	AS integer
	START WITH 1
	INCREMENT BY 1
	NO MINVALUE
	NO MAXVALUE
	CACHE 1;
ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT NEXTVAL('public.users_id_seq'::regclass); 

