
export const queryToInsertNewUser = `
INSERT INTO users (name, email, password)
VALUES ($1, $2, $3)
`;


export const queryToPlusOneView = `
UPDATE "shortenUrls"
SET views = views + 1
WHERE id = $1
`;


export const queryToGetUrlByShortUrl =  `
    SELECT * FROM "shortenUrls"
    WHERE "shortUrl" = $1
`;


export const queryToGetUrlById = `
SELECT id, url, "shortUrl" FROM "shortenUrls"
WHERE id = $1
`;


export const queryToInsertNewShortenUrl =`
INSERT INTO "shortenUrls" (url, "fromUserId", "shortUrl")
VALUES ($1, $2, $3)
`;


export const queryToGetUserAndUrls = `
SELECT 
users.id, users.name, SUM("shortenUrls".views) as "visitCount",

json_build_object
(
'id', "shortenUrls2".id,
'url', "shortenUrls2".url,
'views', "shortenUrls2".views
) AS "shortenedUrls"

FROM users

JOIN "shortenUrls"
ON "shortenUrls"."fromUserId" = users.id

JOIN "shortenUrls" as "shortenUrls2"
ON "shortenUrls2"."fromUserId" = users.id

WHERE users.id = $1

GROUP BY users.id, "shortenUrls2".id, "shortenUrls2".views
`;


export const queryToGetRanking = `
SELECT users.id, name, COUNT("shortenUrls"."fromUserId") as "linksCount", SUM("shortenUrls".views) as "visitCount"
FROM users

JOIN "shortenUrls"
ON "shortenUrls"."fromUserId" = users.id

GROUP BY users.id
ORDER BY "visitCount" DESC
LIMIT 10`