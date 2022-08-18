--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-1.pgdg20.04+1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cakes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cakes (
    id integer NOT NULL,
    "flavourId" integer NOT NULL,
    name character varying(60) NOT NULL,
    price numeric(6,2) NOT NULL,
    image character varying(255) NOT NULL,
    description text
);


ALTER TABLE public.cakes OWNER TO postgres;

--
-- Name: cakes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cakes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cakes_id_seq OWNER TO postgres;

--
-- Name: cakes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cakes_id_seq OWNED BY public.cakes.id;


--
-- Name: clients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying(60) NOT NULL,
    address character varying(255) NOT NULL,
    phone character varying(11) NOT NULL
);


ALTER TABLE public.clients OWNER TO postgres;

--
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clients_id_seq OWNER TO postgres;

--
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- Name: flavours; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.flavours (
    id integer NOT NULL,
    name character varying(20) NOT NULL
);


ALTER TABLE public.flavours OWNER TO postgres;

--
-- Name: flavours_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.flavours_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.flavours_id_seq OWNER TO postgres;

--
-- Name: flavours_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.flavours_id_seq OWNED BY public.flavours.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    "clientId" integer NOT NULL,
    "cakeId" integer NOT NULL,
    quantity integer NOT NULL,
    "createdAt" date DEFAULT now(),
    "totalPrice" numeric(6,2) NOT NULL,
    "isDelivered" boolean DEFAULT false
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: cakes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cakes ALTER COLUMN id SET DEFAULT nextval('public.cakes_id_seq'::regclass);


--
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- Name: flavours id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flavours ALTER COLUMN id SET DEFAULT nextval('public.flavours_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Data for Name: cakes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cakes (id, "flavourId", name, price, image, description) FROM stdin;
1	1	Bolo de pote	5.00	https://conteudo.imguol.com.br/c/entretenimento/95/2020/02/14/bolo-de-pote-de-sensacao-de-morango-de-elaine-ferreira-do-site-e-youtube-cakepedia-1581691057556_v2_450x337.jpg	Bolo de pote bom e barato hmmmm :O
2	2	Bolo de potinho	3.00	https://conteudo.imguol.com.br/c/entretenimento/95/2020/02/14/bolo-de-pote-de-sensacao-de-morango-de-elaine-ferreira-do-site-e-youtube-cakepedia-1581691057556_v2_450x337.jpg	Bolo de pote bom e barato hmmmm :O
3	2	Bolo de potão	10.00	https://amoradoceria.com.br/wp-content/uploads/2022/03/receita-de-bolo-no-pote-de-chocolate.jpg	Bolo de pote bom e barato hmmmm :O
4	4	Torta de limão	15.00	https://images.aws.nestle.recipes/resized/40b25559b85b265e885f55ec7c1e4d04_torta-lim%C3%A3o-receitas-nestle_1200_600.jpg	Tortinha de limão damassa
\.


--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clients (id, name, address, phone) FROM stdin;
1	Mairo	Rua atrás do armário	12345678910
2	Luigo	Rua do seu amigo	12345678911
3	Cabro	Rua do candelabro	1234567890
4	Guri	Rua grande do Sul	11122233345
5	Geraldo	Rua do caldo	21999999999
6	G	Rua do caldo	12345678912
\.


--
-- Data for Name: flavours; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.flavours (id, name) FROM stdin;
1	morango
2	chocolate
3	maracujá
4	limão
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, "clientId", "cakeId", quantity, "createdAt", "totalPrice", "isDelivered") FROM stdin;
1	2	1	3	2022-08-18	15.00	t
2	3	2	3	2022-08-18	9.00	t
3	1	3	4	2022-08-18	40.00	t
5	1	2	3	2022-08-18	50.00	f
4	1	2	3	2022-08-18	50.00	t
6	4	4	2	2022-08-18	30.00	f
7	4	2	5	2022-08-18	15.00	f
8	5	3	5	2022-08-18	50.00	f
\.


--
-- Name: cakes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cakes_id_seq', 4, true);


--
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clients_id_seq', 6, true);


--
-- Name: flavours_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.flavours_id_seq', 4, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 8, true);


--
-- Name: cakes cakes_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cakes
    ADD CONSTRAINT cakes_name_key UNIQUE (name);


--
-- Name: cakes cakes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cakes
    ADD CONSTRAINT cakes_pkey PRIMARY KEY (id);


--
-- Name: clients clients_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_phone_key UNIQUE (phone);


--
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);


--
-- Name: flavours flavours_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flavours
    ADD CONSTRAINT flavours_name_key UNIQUE (name);


--
-- Name: flavours flavours_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flavours
    ADD CONSTRAINT flavours_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: cakes cakes_flavourId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cakes
    ADD CONSTRAINT "cakes_flavourId_fkey" FOREIGN KEY ("flavourId") REFERENCES public.flavours(id);


--
-- Name: orders orders_cakeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_cakeId_fkey" FOREIGN KEY ("cakeId") REFERENCES public.cakes(id);


--
-- Name: orders orders_clientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public.clients(id);


--
-- PostgreSQL database dump complete
--

