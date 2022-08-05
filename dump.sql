--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-1.pgdg20.04+1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-1.pgdg20.04+1)

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
-- Name: shortenUrls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."shortenUrls" (
    id integer NOT NULL,
    "fromUserId" integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    views integer DEFAULT 0 NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


ALTER TABLE public."shortenUrls" OWNER TO postgres;

--
-- Name: shortenUrls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."shortenUrls_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."shortenUrls_id_seq" OWNER TO postgres;

--
-- Name: shortenUrls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."shortenUrls_id_seq" OWNED BY public."shortenUrls".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(60) NOT NULL,
    email character varying(60) NOT NULL,
    password text NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: shortenUrls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."shortenUrls" ALTER COLUMN id SET DEFAULT nextval('public."shortenUrls_id_seq"'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: shortenUrls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."shortenUrls" (id, "fromUserId", url, "shortUrl", views, "createdAt") FROM stdin;
3	8	https://www.youtube.com/	4N8heYKtoYkYDK-IkAv4h	7	2022-08-03
38	24	https://www.bible.com	zV4MGt1qNTtxr0roFjK6I	1	2022-08-05
39	24	https://www.bible2.com	eDPHdoZDOhTQ4Zir820f7	0	2022-08-05
13	12	https://www.ruamaurl02.com/	fcuZKTrOX3NtAv4o2-VB5	5	2022-08-04
15	12	https://www.ruamaurl04.com/	98EbxOrGSc_eVJiqLyFaD	11	2022-08-04
23	16	https://www.google.com/	0854o94AZdTxJbVGIvENp	0	2022-08-04
8	11	https://www.w3schools.com/sql/sql_delete.asp	7gHigibCD7wMeaSBnQAHN	57	2022-08-03
25	17	https://www.goo22gle.com/	TpmuyE5n9wnPEyKwS-bn4	0	2022-08-04
26	18	https://www.youtube.com/	TpmuyE5M5wnPEyKwS-bn4	0	2022-08-04
27	19	https://www.github.com/	TpmuyE1M9wnPEyKwS-bn4	0	2022-08-04
2	8	https://www.instagram.com/	H7QQgE6d9axD9shH6zVYc	122	2022-08-03
6	8	https://github.com/	5vipB9TbZhak97xWY6bu-	0	2022-08-03
7	11	https://www.instagram.com/	H4fz5sDTDXd-I0-fkOlMN	7	2022-08-03
29	21	https://www.bible.com/	TpmuyE5M9wnPzyKwS-bn4	0	2022-08-04
30	22	https://www.jesuscopy.com/	TpmuyE5Z9wnPEyKwS-bn4	0	2022-08-04
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
8	Math	math@math.com	$2b$10$meA7WkEW72spgXRXY2lD0.AfAIKl4YxfoNFzyItcj3MInKlvppCHa	2022-08-02
11	Math2	matheus@math.com	$2b$10$50CwYPCCOp.scK6LotM.ZOjRIVKSjDOfEd85dp1eMxpmKdCn599vG	2022-08-03
12	Ruama	ruama@math.com	$2b$10$tLDPrG0iV.KJGag8yyYNPuSTGSL0WTbO4RWgF3RtJ.OQ7jMdMt.w6	2022-08-04
13	Ruam2	ruama2@math.com	$2b$10$tLDPrG0iV.KJGag8yyYNPuSTGSL0WTbO4RWgF3RtJ.OQ7jMdMt.w6	2022-08-01
14	Usuario14	usuario14@math.com	$2b$10$tLDPrG0iV.KJGag8yyYNPuSTGSL0WTbO4RWgF3RtJ.OQ7jMdMt.w6	2022-08-02
15	Usuario15	usuario15@math.com	$2b$10$tLDPrG0iV.KJGag8yyYNPuSTGSL0WTbO4RWgF3RtJ.OQ7jMdMt.w6	2022-08-04
16	Usuario16	usuario16@math.com	$2b$10$tLDPrG0iV.KJGag8yyYNPuSTGSL0WTbO4RWgF3RtJ.OQ7jMdMt.w6	2022-08-04
17	Usuario17	usuario17@math.com	$2b$10$tLDPrG0iV.KJGag8yyYNPuSTGSL0WTbO4RWgF3RtJ.OQ7jMdMt.w6	2022-08-04
18	Usuario18	usuario18@math.com	$2b$10$tLDPrG0iV.KJGag8yyYNPuSTGSL0WTbO4RWgF3RtJ.OQ7jMdMt.w6	2022-08-04
19	Usuario19	usuario19@math.com	$2b$10$tLDPrG0iV.KJGag8yyYNPuSTGSL0WTbO4RWgF3RtJ.OQ7jMdMt.w6	2022-08-04
20	Usuario20	usuario20@math.com	$2b$10$tLDPrG0iV.KJGag8yyYNPuSTGSL0WTbO4RWgF3RtJ.OQ7jMdMt.w6	2022-08-04
21	Usuario21	usuario21@math.com	$2b$10$tLDPrG0iV.KJGag8yyYNPuSTGSL0WTbO4RWgF3RtJ.OQ7jMdMt.w6	2022-08-04
22	Usuario22	usuario22@math.com	$2b$10$tLDPrG0iV.KJGag8yyYNPuSTGSL0WTbO4RWgF3RtJ.OQ7jMdMt.w6	2022-08-04
23	Usuario23	usuario23@math.com	$2b$10$tLDPrG0iV.KJGag8yyYNPuSTGSL0WTbO4RWgF3RtJ.OQ7jMdMt.w6	2022-08-04
24	Lucas	lucas@lucas.com	$2b$10$kxnGhPKibhzjajlIG07ubOZ9dX2Vvql/nat4LuxLnAbWDH1KRDo0C	2022-08-05
\.


--
-- Name: shortenUrls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."shortenUrls_id_seq"', 39, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 24, true);


--
-- Name: shortenUrls shortenUrls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."shortenUrls"
    ADD CONSTRAINT "shortenUrls_pkey" PRIMARY KEY (id);


--
-- Name: shortenUrls shortenUrls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."shortenUrls"
    ADD CONSTRAINT "shortenUrls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: shortenUrls shortenUrls_fromUserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."shortenUrls"
    ADD CONSTRAINT "shortenUrls_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

